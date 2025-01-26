import MiniContactForm from "../forms/MiniContactForm";

const MiniContactFormSection = () => {
  return (
    <section>
      <div className="max-page-width sm:px-4">
        <div className="relative z-10 -mt-24 w-full rounded-md bg-background p-4 !pb-0 sm:w-fit lg:-mt-28 xl:-mt-32">
          <p className="mb-4 text-lg sm:max-w-md sm:text-balance">
            För att komma igång behöver vi först lite uppgifter, fyll i
            formuläret så återkommer vi så fort vi kan!
          </p>
          <MiniContactForm />
        </div>
      </div>
    </section>
  );
};

export default MiniContactFormSection;
