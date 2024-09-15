// ContactForm.tsx
import React, { useState } from "react";

const ContactForm: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await fetch("/api/server", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, message }),
    });

    if (response.ok) {
      alert("문의가 성공적으로 전송되었습니다!");
    } else {
      alert("문의 전송에 실패했습니다.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="이름"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="email"
        placeholder="이메일"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <textarea
        placeholder="문의 내용"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
      />
      <button type="submit">문의하기</button>
    </form>
  );
};

export default ContactForm;
