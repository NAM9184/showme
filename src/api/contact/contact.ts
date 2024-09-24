import { ContactType } from "./email";

export async function sendContactEmail(emailForm: ContactType) {
  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(emailForm),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "서버 요청에 실패함");
    }

    return data;
  } catch (error) {
    console.error("Fetch 에러:", error);
    throw new Error("서버와의 통신에 실패했습니다.");
  }
}
