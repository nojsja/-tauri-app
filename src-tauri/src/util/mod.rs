

/* 闭包 */
pub impl<T> Cacher<T>
  where T: Fn(u32) -> u32
{
  pub fn new(calculation: T) -> Cacher<T> {
      Cacher {
          calculation,
          value: None,
      }
  }

  pub fn value(&mut self, arg: u32) -> u32 {
      match self.value {
          Some(v) => v,
          None => {
              let v = (self.calculation)(arg);
              self.value = Some(v);
              v
          },
      }
  }

  pub fn clear(&mut self) {
      self.value = None;
  }
}