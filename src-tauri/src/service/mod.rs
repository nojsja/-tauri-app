
pub mod main {
  use serde::{Serialize, Deserialize};

  #[derive(Serialize, Deserialize)]
  pub struct Action {
    pub action: String,
    pub data: String
  }
}

use main::Action;

#[tauri::command]
pub async fn hello_command(params: Action) -> Result<String, String> {
  Ok(String::from("Hello, ") +  &serde_json::to_string(&params).unwrap())
}
