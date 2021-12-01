use serde::{Serialize, Deserialize};
use std::process::{Command, Stdio};
use std::io::{BufRead, BufReader, Error, ErrorKind};

#[derive(Serialize, Deserialize)]
pub struct Request {
  pub action: String,
  pub data: String
}

#[derive(Serialize, Deserialize)]
pub struct  Response {
  pub code: i32,
  pub msg: String
}

#[tauri::command]
pub async fn hello_command(window: tauri::Window, req: Request) -> Result<Response, String> {
  println!("Called from {}", window.label());
  Ok(
    Response {
      code: 200,
      msg: String::from("Hello, ") +  &serde_json::to_string(&req).unwrap()
    }
  )
}

#[tauri::command]
pub async fn exec_command(req: Request) -> Result<Response, String> {
  let output = Command::new(req.data)
    .arg("-l")
    .output()
    .expect("failed to execute process");

  println!("status: {}", output.status);
  println!("stdout: {}", String::from_utf8_lossy(&output.stdout));
  println!("stderr: {}", String::from_utf8_lossy(&output.stderr));

  Ok(
    Response {
      code: 200,
      msg: "exec".into()
    }
  )
}