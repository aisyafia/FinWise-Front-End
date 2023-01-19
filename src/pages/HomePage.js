import {
  SlFolderAlt,
  SlCloudUpload,
  SlArrowRight,
  SlEyeglass,
} from "react-icons/sl";
import { InputField } from "../components";

const HomePage = (props) => {
  // console.log("text", text);

  return (
    <div>
      <h2>Understand what you earn</h2>
      <div>
        <img
          src="https://cdn-icons-png.flaticon.com/512/1945/1945929.png"
          width="30em"
          alt="pdf 2d"
        />
        <h2>How to start?</h2>
        <div>
          <SlFolderAlt />
          <br />
          <p>Select your payslip PDF</p>
        </div>
        <div>
          <SlCloudUpload />
          <br />
          <p>Upload</p>
        </div>
        <div>
          <SlArrowRight />
          <br />
          <p>Submit</p>
        </div>
        <div>
          <SlEyeglass />
          <br />
          <p>Read away!</p>
        </div>
        <InputField setter={props.setter} getter={props.getter} />
      </div>
      <br />
      <br />
      <div>
        <img
          src="https://s.smallpdf.com/static/2e2d4d86b07e272f0e17.svg"
          alt="lock 2d"
        />
        <h2>
          <strong>IMPORTANT!</strong>
        </h2>
        <p>
          Your PRIVACY is VERY IMPORTANT to us. We <strong>DO NOT</strong> store
          or record <em>ANY</em> of your personal information from your uploaded
          file(s) in our system. We do not save files in our server.
        </p>
        <br />
        <img
          src="https://s.smallpdf.com/static/ce852e16512bd6e094f1.svg"
          alt="medal 2d"
        />
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
        <img
          src="https://s.smallpdf.com/static/7ca27d0428c9614899dc.svg"
          alt="lightbulb 2d"
        />
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
