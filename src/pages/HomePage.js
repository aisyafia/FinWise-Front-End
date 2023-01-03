import { InputField } from "../components";

const HomePage = () => {
  // console.log("text", text);

  return (
    <div>
      <h2>Understand what you earn</h2>
      <div>
        <h2>How to start?</h2>
        <InputField />
      </div>
      <br />
      <br />
      <div>
        <h2>
          <strong>IMPORTANT!</strong>
        </h2>
        <p>
          Your PRIVACY is VERY IMPORTANT to us. We <strong>DO NOT</strong> store
          or record <em>ANY</em> of your personal information from your uploaded
          file(s) in our system. We merely capture and reflect it back to you,
          alongside our financial translation{" "}
        </p>
        <br />
        <h2>Why the service?</h2>

        <p>
          Is this your first time, as a foreigner, to receive your salary from a
          Dutch company? Or, after a while, you get curious to see what are
          those initials and numbers mean in you pay slip? Or is it that time of
          the year to report your tax and tax return?
        </p>

        <p>Pay-slip-and-slide is here to assist you!</p>

        <p>
          At a glance, the Dutch format of pay slip can seem complicated or even
          overwhelming to look at, much less to understand. We want to explain
          them in a simple enough way, even if you do not have a background in
          finance.
        </p>

        <br />
        <h2>Why should you understand?</h2>

        <p>
          "I don't really care, as long as the money arrive in my bank account".
        </p>

        <p>
          Ah... yes, ignorance is bliss. Very compelling argument. Although,
          hear us out: YOU EARNED this money. You SHOULD know what they consist
          of: how much holiday pay you have accrued, what taxes or insurance
          borne by you or your employer, what other benefits are included in
          your salary.
        </p>

        <p>
          On top of that, understanding what you earn is the first step to be a
          ✨ responsible adult ✨ who is financially aware and literate.
        </p>
      </div>
    </div>
  );
};

export { HomePage };
