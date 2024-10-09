interface INotification {
  send(message: string): void;
}

class Email implements INotification {
  private _emailaddress: string;
  private _content: string;
  constructor(email: string, content: string) {
    this._emailaddress = email;
    this._content = content;
  }
  send(message: string): void {
    console.log("Hello via Email");
  }
}

class SMS implements INotification {
  private _phno: string;
  private _content: string;
  constructor(phno: string, content: string) {
    this._phno = phno;
    this._content = content;
  }
  send(message: string): void {
    console.log("Hello via SMS");
  }
}

class Push implements INotification {
  private _content: string;
  constructor(content: string) {
    this._content = content;
  }
  send(message: string): void {
    console.log("Hello via push");
  }
}

class EmailNotiFactory {
  createNotification(email: string, content: string): INotification {
    return new Email(email, content);
  }
}

class SMSNotiFactory {
  createNotification(phno: string, content: string): INotification {
    return new SMS(phno, content);
  }
}

class PushNotiFactory {
  createNotification(content: string) {
    return new Push(content);
  }
}
type notiType = "SMS" | "PUSH" | "EMAIL";
const client = (input: notiType) => {
  switch (input) {
    case "EMAIL":
      return new EmailNotiFactory().createNotification(
        "kaunghtetmon@gmail.com",
        "hello there"
      );
      break;
    case "PUSH":
      return new PushNotiFactory().createNotification("PUSH");
      break;
    case "SMS":
      return new SMSNotiFactory().createNotification("", "");
      break;
  }
};
console.log(client("EMAIL"));
