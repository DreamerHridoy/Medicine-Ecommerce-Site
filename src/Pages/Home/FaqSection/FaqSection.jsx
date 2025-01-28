const FaqSection = () => {
  return (
    <div className="mt-5">
      <h2 className="text-2xl font-semibold text-center mt-4 mb-5">
        Things You Need To KNOW
      </h2>
      <div className="join join-vertical w-full">
        <div className="collapse collapse-arrow join-item border-base-300 border">
          <input type="radio" name="my-accordion-4" defaultChecked />
          <div className="collapse-title text-xl font-medium">
            Why is it important to keep medication in the original packaging?
          </div>
          <div className="collapse-content">
            <p>
              In general, the original container protects the medicine from
              heat, air, light and/or moisture. Exposure to these elements may
              affect the stability of the formulation and/or the active
              ingredient, which can alter the effectiveness and safety of the
              medicine
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item border-base-300 border">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium">
            Why is it important to store medicine?
          </div>
          <div className="collapse-content">
            <p>
              if medications aren't stored properly they may not work as
              promised. Exposure to light, humidity, and extreme temperatures
              can break down both prescription and over-the-counter drugs,
              making them less effective and – in rare cases – even toxic.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item border-base-300 border">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium">
            Why is a drug store important?
          </div>
          <div className="collapse-content">
            <p>
              Private sector retail pharmacies, or drug shops, play an important
              role in access to essential medicines and services in
              low-and-middle-income countries. Recognising that they have the
              potential to contribute to health system strengthening efforts,
              many recent initiatives to engage with drug shops have been
              launched.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item border-base-300 border">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium">
            Can medicine bottles be reused?
          </div>
          <div className="collapse-content">
            <p>
              Wash the bottles and lids in very hot water and dish soap (by hand
              or in the dishwasher) or boil to sanitize. Rinse well to get rid
              of any remaining residue. Dry the bottles and lids thoroughly (can
              be air-dried or dried with a clean cloth). Replace the lids on the
              cleaned and dried bottles.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item border-base-300 border">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium">
            Who is the father of pharmacy in the world?
          </div>
          <div className="collapse-content">
            <p>
              The title of the "father of pharmacy history" is often attributed
              to William Procter Jr., an American pharmacist and educator who
              made significant contributions to the field of pharmacy and
              pharmaceutical history in the 19th century.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
