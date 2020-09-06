import styled from "styled-components";
import { InputLabel, FormControl } from "@material-ui/core";

export const StyledInputLabel = styled(InputLabel)`
  && {
    .req-label {
      color: #f44336;
    }
  }
`;

export const StyledFormControl = styled(FormControl)`
  && {
    width: 100%;
    display: block;
    position: relative;
  }
`;

export const StyledAutoSelectInputLabel = styled(InputLabel)`
  && {
    position: relative;
    .req-label {
      color: #f44336;
    }
    transform: translate(0, 1.5px) scale(0.75);
    transform-origin: top left;
  }
`;
