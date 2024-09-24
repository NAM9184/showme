"use client";

import { useState } from "react";
import { sendContactEmail } from "@/api/contact/contact";
import styles from "./EmailForm.module.css";

// 초기 입력값
const initialContact = {
  from: "",
  title: "",
  content: "",
};

// 최대 글자 수
const maxContentLength = 2000;

// 비속어 목록
const badWords = ["비속어1", "비속어2", "비속어3"];

// 비속어 탐지 함수
const detectBadWords = (text: string) => {
  return badWords.some((word) => text.includes(word));
};

export default function EmailForm() {
  const [contact, setContact] = useState(initialContact);
  const [errorMessage, setErrorMessage] = useState(""); // 에러 메시지 상태

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { value, name } = e.target;

    // 문의 내용에 글자 수 제한 적용
    if (name === "content" && value.length > maxContentLength) return;

    setContact((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // 비속어 탐지
    if (detectBadWords(contact.content)) {
      setErrorMessage("비속어가 포함되어 있습니다.");
      return;
    }

    // 이메일 전송
    await sendContactEmail({ ...contact });
    setContact(initialContact);
    setErrorMessage("");
  };

  return (
    <form onSubmit={onSubmit} className={styles.formContainer}>
      <div className={styles.formGroup}>
        <label className={styles.label}>
          <span className={styles.labelTitle}>제목</span>
          <input
            required
            type="text"
            name="title"
            value={contact.title}
            onChange={onChange}
            className={styles.input}
          />
        </label>
      </div>

      {/* 이메일 입력 */}
      <div className={styles.formGroup}>
        <label className={styles.label}>
          <span className={styles.labelTitle}>이메일</span>
          <input
            required
            type="text"
            name="from"
            value={contact.from}
            onChange={onChange}
            className={styles.input}
          />
        </label>
      </div>

      {/* 문의 내용 입력 및 글자 수 제한 */}
      <div className={styles.formGroup}>
        <label className={styles.label}>
          <span className={styles.labelTitle}>내용</span>
          <textarea
            required
            name="content"
            rows={10}
            value={contact.content}
            onChange={onChange}
            className={styles.textarea}
            maxLength={maxContentLength} // 최대 글자 수 제한
          />
        </label>
        <p>
          {contact.content.length} / {maxContentLength} 글자
        </p>{" "}
        {/* 남은 글자 수 표시 */}
      </div>

      {/* 에러 메시지 출력 */}
      {errorMessage && <p className={styles.error}>{errorMessage}</p>}

      {/* 제출 버튼 */}
      <button type="submit" className={styles.button}>
        전송
      </button>
    </form>
  );
}
