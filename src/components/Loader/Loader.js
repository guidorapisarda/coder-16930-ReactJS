import { css } from "@emotion/react";
import PacmanLoader from "react-spinners/MoonLoader";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
  color: "#000000";
  speedMultiplier: 1.5;
`;
export const Loader = (loading) => {

    return (
        <div className="sweet-loading">
          <PacmanLoader css={override} size={200} color={"#123abc"} loading={loading} speedMultiplier={1.5} />
        </div>
    );
}