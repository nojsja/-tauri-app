#[macro_use]
extern crate json;

use tauri::{Manager, Window};
use std::thread::spawn;
mod service;

// the payload type must implement `Serialize`.
#[derive(serde::Serialize)]
struct Payload {
  message: String,
}

// init a background process on the command, and emit periodic events only to the window that used the command
#[tauri::command]
fn init_process(window: Window) {
  spawn(move || {
    window.emit("communication", Payload { message: String::from("Tauri is awesome!") }).unwrap();
  });
}

fn main() {
  tauri::Builder::default()
    .setup(|app| {
      // the default value is `main`. note that it must be unique
      let main_window = app.get_window("main").unwrap();

      // listen to the `event-name` (emitted on the `main` window)
      main_window.listen("communication", |event| {
        println!("got window event-name with payload {:?}", event.payload());
      });

      // emit the `event-name` event to the `main` window
      main_window.emit("communication", Payload { message: String::from("Tauri is awesome!") }).unwrap();
      Ok(())
    })
    .invoke_handler(
      tauri::generate_handler![
        init_process,
        service::hello_command,
        service::exec_command
      ]
    )
    .run(tauri::generate_context!())
    .expect("failed to run app");
}