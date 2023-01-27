import { InputField } from "../components";
import styled from "styled-components";
import {
  ArrowCircleRight,
  FolderOpenTwoTone,
  CloudUploadTwoTone,
  AutoStoriesTwoTone,
} from "@mui/icons-material";

const HomePage = (props) => {
  // console.log("text", text);

  return (
    <MainContainer>
      <img
        src="https://images.unsplash.com/photo-1554224154-26032ffc0d07?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fGZpbmFuY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
        width="300rem"
      />
      <h2>Understand what you earn</h2>
      <FirstContainer>
        <Intro>
          <img
            src="https://cdn-icons-png.flaticon.com/512/80/80942.png"
            width="20%"
            height="auto"
            alt="pdf 2d"
          />
          <h3>How to start?</h3>
        </Intro>
        <Steps>
          <ArrowCircleRight />
          <Step>
            <FolderOpenTwoTone fontSize="large" />
            <br />
            <p>Select your payslip PDF</p>
          </Step>
          <Step>
            <CloudUploadTwoTone fontSize="large" />
            <br />
            <p>Upload</p>
          </Step>
          <Step>
            <AutoStoriesTwoTone fontSize="large" />
            <br />
            <p>Read away!</p>
          </Step>
        </Steps>
      </FirstContainer>
      <InputField setter={props.setter} getter={props.getter} />

      <br />
      <br />
      <div>
        <Step>
          <img
            src="https://s.smallpdf.com/static/2e2d4d86b07e272f0e17.svg"
            alt="lock 2d"
          />
          <h2>
            <strong>IMPORTANT!</strong>
          </h2>
          <p>
            Your PRIVACY is VERY IMPORTANT to us. We <strong>DO NOT</strong>{" "}
            store or record <em>ANY</em> of your personal information from your
            uploaded file(s) in our system.
          </p>
        </Step>
        <br />
        <Step>
          <img
            src="https://s.smallpdf.com/static/ce852e16512bd6e094f1.svg"
            alt="medal 2d"
          />
          <h2>Why the service?</h2>

          <p>
            Is this your first time, as a foreigner, to receive your salary from
            a Dutch company? Or, after a while, you get curious to see what are
            those initials and numbers mean in you pay slip? Or is it that time
            of the year to report your tax and tax return?
          </p>
          <p>FinWise is here to assist you!</p>
          <p>
            At a glance, the Dutch format of pay slip can seem complicated or
            even overwhelming to look at, much less to understand. We want to
            explain them in a simple enough way, even if you do not have a
            background in finance.
          </p>
        </Step>
        <br />
        <Step>
          <img
            src="https://s.smallpdf.com/static/7ca27d0428c9614899dc.svg"
            alt="lightbulb 2d"
          />
          <h2>Why should you understand?</h2>

          <p>
            "I don't really care, as long as the money arrive in my bank
            account".
          </p>

          <p>
            Ah... yes, ignorance is bliss. Very compelling argument. Although,
            hear us out: YOU EARNED this money. You SHOULD know what they
            consist of: how much holiday pay you have accrued, what taxes or
            insurance borne by you or your employer, what other benefits are
            included in your salary.
          </p>

          <p>
            On top of that, understanding what you earn is the first step to be
            a ✨ responsible adult ✨ who is financially aware and literate.
          </p>
        </Step>
      </div>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 4rem;
`;
const FirstContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 2rem;
`;
const Intro = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 20%;
`;
const Steps = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: auto;
`;
const Step = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
`;

export { HomePage };
