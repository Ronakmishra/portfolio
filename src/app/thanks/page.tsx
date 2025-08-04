// app/thanks/page.tsx

export const metadata = {
  title: "Thanks",
  description: "Thank you for your message.",
};

export default function ThanksPage() {
  return (
    <section className="flex flex-col items-center justify-center text-center min-h-[calc(100vh-6rem)] sm:min-h-[calc(100vh-12rem)]">
      <h1 className="text-4xl font-bold mb-2">Thanks!</h1>
      <p className="text-muted-foreground">
        Your message has been submitted successfully.
      </p>
    </section>
  );
}
