import React, { useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "./ui/Button";

interface GuestBookSectionProps {
  googleSheetGeustBookUrl: string;
}

export const GuestBookSection: React.FC<GuestBookSectionProps> = ({
  googleSheetGeustBookUrl,
}) => {
    console.log(googleSheetGeustBookUrl);
    
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const [formData, setFormData] = useState({ name: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // فحص للتأكد من وجود الرابط قبل الإرسال
    if (!googleSheetGeustBookUrl) {
      setError("رابط Google Sheets غير معرف، يرجى التأكد من ملف .env");
      return;
    }

    if (!formData.name || !formData.message) return;

    setIsSubmitting(true);
    setError("");

    try {
      await fetch(googleSheetGeustBookUrl, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      console.log("Form submitted successfully");

      setSubmitSuccess(true);
      setFormData({ name: "", message: "" });
    } catch (err) {
      setError("حدث خطأ أثناء إرسال الكلمة، يرجى المحاولة مرة أخرى.");
    } finally {
      setIsSubmitting(false);
    }
  };;

  return (
    <section ref={ref} className=" md:py-24 px-4 relative">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-xl mx-auto text-center bg-white/40 backdrop-blur-md p-8 md:p-12 rounded-3xl border border-gold/20 shadow-xl"
      >
        {/* أيقونة الريشة أو الظرف */}
        <motion.div
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : { scale: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-16 h-16 mx-auto mb-4 flex items-center justify-center text-gold"
        >
          <svg
            className="w-10 h-10 stroke-[1.5]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
            />
          </svg>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-2xl md:text-4xl font-bold text-charcoal font-amiri mb-3"
        >
          دَفْتَرُ الذِّكْرَيَاتِ
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-charcoal/70 font-tajawal text-sm md:text-base mb-8"
        >
          اتْرُكُوا لَنَا كَلِمَةً دَافِئَةً أَوْ دَعْوَةً مِنْ قُلُوبِكُمْ
          لِتَكُونَ ذِكْرَى جَمِيلَةً نَحْتَفِظُ بِهَا 🤍
        </motion.p>

        {submitSuccess ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="py-6"
          >
            <div className="text-4xl mb-3">💌</div>
            <p className="text-lg font-semibold text-gold font-tajawal">
              شُكْرًا لِكَلِمَاتِكُمُ الرَّاقِيَةِ ، وَصَلَتْ إلَى قُلُوبِنَا !
            </p>
            <button
              onClick={() => setSubmitSuccess(false)}
              className="mt-4 text-xs text-charcoal/60 underline font-tajawal"
            >
              كِتَابَةُ رِسَالَةٍ أُخْرَى
            </button>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 text-right">
            <div>
              <label className="block text-xs font-medium text-charcoal mb-1 font-tajawal">
                الاسم
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                required
                placeholder="أدخل اسمك الكريم"
                className="w-full px-4 py-3 rounded-xl border border-charcoal/15 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all font-tajawal bg-white/70 text-sm"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-charcoal mb-1 font-tajawal">
                رسالتك للعروسين
              </label>
              <textarea
                rows={3}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                required
                placeholder="اكتب تهنئتك أو كلمتك هنا..."
                className="w-full px-4 py-3 rounded-xl border border-charcoal/15 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all font-tajawal bg-white/70 text-sm resize-none"
              />
            </div>

            {error && (
              <p className="text-red-500 text-xs font-tajawal">{error}</p>
            )}

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 text-base"
            >
              {isSubmitting
                ? "جَارِي الإِرْسَالُ..."
                : "إِرْسَالُ الذِّكْرَى 🕊️"}
            </Button>
          </form>
        )}
      </motion.div>
    </section>
  );
};
