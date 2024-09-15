"use client";

import { useState } from "react";
import { sendContactEmail } from "../../api/contact";
import styles from "./EmailForm.module.css"; // CSS Modules 파일 가져오기

const initialContact = {
  from: "",
  title: "",
  content: "",
};

export default function EmailForm() {
  const [contact, setContact] = useState(initialContact);

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { value, name } = e.target;
    setContact((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await sendContactEmail({ ...contact });
    setContact(initialContact);
  };

  return (
    <form onSubmit={onSubmit} className={styles.formContainer}>
      <div className={styles.formGroup}>
        <label className={styles.label}>
          제목
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
      <div className={styles.formGroup}>
        <label className={styles.label}>
          문의 내용
          <textarea
            required
            name="content"
            rows={10}
            value={contact.content}
            onChange={onChange}
            className={styles.textarea}
          />
        </label>
      </div>
      <div className={styles.formGroup}>
        <label className={styles.label}>
          이메일
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
      <button type="submit" className={styles.button}>
        작성 완료
      </button>
    </form>
  );
}
