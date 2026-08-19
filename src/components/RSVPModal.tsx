import React, { useState } from "react";
import { motion } from "framer-motion";
import { Modal } from "./ui/Modal";
import { Button } from "./ui/Button";
import { RSVPFormData } from "../types";

interface RSVPModalProps {
  isOpen: boolean;
  onClose: () => void;
  googleSheetsUrl: string;
}

// دالة تحويل الأرقام العربية إلى أرقام إنجليزية لضمان صحة الجمع في الشيت
const convertArabicToEnglishNumbers = (input: string | number): number => {
  const str = String(input);
  const arabicDigits = ["٠", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩"];

  const converted = str.replace(/[٠-٩]/g, (w) =>
    arabicDigits.indexOf(w).toString(),
  );

  return parseInt(converted, 10) || 1;
};

export const RSVPModal: React.FC<RSVPModalProps> = ({
  isOpen,
  onClose,
  googleSheetsUrl,
}) => {
  const [formData, setFormData] = useState<RSVPFormData>({
    fullName: "",
    guestCount: "1",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    // تحويل عدد المرافقين لرقم إنجليزي صحيح
    const cleanGuestCount = convertArabicToEnglishNumbers(formData.guestCount);

    // تجهيز البيانات بالأسماء المعرفة في Apps Script
    const payload = {
      name: formData.fullName,
      count: cleanGuestCount,
    };

    try {
      await fetch(googleSheetsUrl, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      // أسلوب no-cors يفترض نجاح الطلب
      setSubmitSuccess(true);

      setTimeout(() => {
        onClose();
        setSubmitSuccess(false);
        setFormData({ fullName: "", guestCount: "1" });
      }, 3000);
    } catch (err) {
      setError("حدث خطأ أثناء إرسال الرد. يرجى المحاولة مرة أخرى.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="text-center">
        <h2 className="text-2xl font-bold text-charcoal font-amiri mb-2">
          تَأْكِيدُ الْحُضُورِ
        </h2>
        <p className="text-charcoal/70 font-tajawal mb-6">
          يُسْعِدُنَا مُشَارَكَتُكُمْ فِي فَرَحَتِنَا
        </p>

        {submitSuccess ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="py-8"
          >
            <div className="text-6xl mb-4">🤍</div>
            <p className="text-xl font-semibold text-gold font-tajawal">
              تُسْعِدُنَا مُشَارَكَتُكُمْ ، نَنْتَظِرُكُمْ بكُلّ حُبٍّ !
            </p>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 text-right">
            <div>
              <label
                htmlFor="fullName"
                className="block text-sm font-medium text-charcoal mb-2 font-tajawal"
              >
                الاسم الكامل
              </label>
              <input
                type="text"
                id="fullName"
                value={formData.fullName}
                onChange={(e) =>
                  setFormData({ ...formData, fullName: e.target.value })
                }
                required
                className="w-full px-4 py-3 rounded-lg border border-charcoal/20 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all font-tajawal bg-white/50"
                placeholder="أدخل اسمك الكريم"
              />
            </div>

            <div>
              <label
                htmlFor="guestCount"
                className="block text-sm font-medium text-charcoal mb-2 font-tajawal"
              >
                عدد المرافقين
              </label>
             <input
                type="text"
                id="guestCount"
                value={formData.guestCount}
                onChange={(e) =>
                  setFormData({ ...formData, guestCount: e.target.value })
                }
                required
                className="w-full px-4 py-3 rounded-lg border border-charcoal/20 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all font-tajawal bg-white/50"
                placeholder="أدخل عدد المرافقين"
              />
            </div>

            {error && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-red-500 text-sm font-tajawal"
              >
                {error}
              </motion.p>
            )}

            <Button type="submit" disabled={isSubmitting} className="w-full">
              {isSubmitting ? "جاري الإرسال..." : "إرسال التأكيد"}
            </Button>
          </form>
        )}
      </div>
    </Modal>
  );
};
