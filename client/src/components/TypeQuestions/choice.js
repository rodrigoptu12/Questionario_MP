import {
  TextField,
  Typography,
  Paper,
  Switch,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React, { useEffect, useState } from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
    },
  },
  paper: {
    padding: theme.spacing(2),
  },
  form: {
    display: "flex",
    flexWrap: "wrap",
  },
  fileInput: {
    width: "97%",
    margin: "10px 0",
  },
  text: {
    marginLeft: "0.5rem",
  },
}));

export default function RadioButtonsGroup({ questionChoice }) {
  const classes = useStyles();
  const [options, setOptions] = useState(["", "", "", "", ""]);
  const [wording, setWording] = useState(null);
  const [finalOptions, setFinalOptions] = useState([]);
  const [hasResponse, setHasResponse] = useState(false);
  const [response, setResponse] = useState(null);
  const [finalResponse, setFinalResponse] = useState(null);

  const handleChange = (event) => {
    const index = event.target.value;
    if (hasResponse === false) {
      setResponse(null);
      setFinalResponse(null);
      return;
    }
    setResponse(index);
    setFinalResponse(finalOptions.indexOf(options[parseInt(index)]));
  };

  const hasText = (option) => {
    return option.length;
  };

  useEffect(() => {
    questionChoice(wording, finalOptions, hasResponse, finalResponse);
  }, [wording, finalOptions, hasResponse, finalResponse]);

  const handleWording = (newWording) => {
    setWording(newWording);
  };

  const handleOptions = (newOptions) => {
    setOptions(newOptions);
    setFinalOptions(options.filter(hasText));
  };

  const handleHasResponse = () => {
    setHasResponse(!hasResponse);
    setResponse(null);
    setFinalResponse(null);
  };

  return (
    <Paper className={classes.paper}>
      <form
        autoComplete="off"
        noValidate
        className={`${classes.root} ${classes.form}`}
      >
        <Typography variant="h6" className={classes.text}>
          Nesse tipo de questão pode ser selecionado apenas uma resposta.
        </Typography>
        <TextField
          name="title"
          variant="outlined"
          label="Enunciado"
          fullWidth
          multiline
          onChange={(e) => {
            const newWording = e.target.value;
            handleWording(newWording);
          }}
        />
        <TextField
          name="1"
          variant="filled"
          label="Opção 1"
          fullWidth
          multiline
          onChange={(e) => {
            const copyOptions = options;
            copyOptions[0] = e.target.value;
            handleOptions(copyOptions);
          }}
        />
        <TextField
          name="2"
          variant="filled"
          label="Opção 2"
          fullWidth
          multiline
          onChange={(e) => {
            const copyOptions = options;
            copyOptions[1] = e.target.value;
            handleOptions(copyOptions);
          }}
        />
        <TextField
          name="3"
          variant="filled"
          label="Opção 3"
          fullWidth
          multiline
          onChange={(e) => {
            const copyOptions = options;
            copyOptions[2] = e.target.value;
            handleOptions(copyOptions);
          }}
        />
        <TextField
          name="4"
          variant="filled"
          label="Opção 4"
          fullWidth
          multiline
          onChange={(e) => {
            const copyOptions = options;
            copyOptions[3] = e.target.value;
            handleOptions(copyOptions);
          }}
        />
        <TextField
          name="5"
          variant="filled"
          label="Opção 5"
          fullWidth
          multiline
          onChange={(e) => {
            const copyOptions = options;
            copyOptions[4] = e.target.value;
            handleOptions(copyOptions);
          }}
        />
        <Switch
          checked={hasResponse}
          onChange={handleHasResponse}
          name="hasResponse"
          inputProps={{ "aria-label": "secondary checkbox" }}
        />
        {hasResponse ? (
          <FormControl component="fieldset">
            <RadioGroup
              row
              aria-label="options"
              name="options"
              value={response}
              onChange={handleChange}
            >
              <FormControlLabel
                value={options[0].length ? "0" : "disabled"}
                disabled={!options[0].length}
                control={<Radio color="primary" />}
                label="Opção 1"
              />
              <FormControlLabel
                value={options[1].length ? "1" : "disabled"}
                disabled={!options[1].length}
                control={<Radio color="primary" />}
                label="Opção 2"
              />
              <FormControlLabel
                value={options[2].length ? "2" : "disabled"}
                disabled={!options[2].length}
                control={<Radio color="primary" />}
                label="Opção 3"
              />
              <FormControlLabel
                value={options[3].length ? "3" : "disabled"}
                disabled={!options[3].length}
                control={<Radio color="primary" />}
                label="Opção 4"
              />
              <FormControlLabel
                value={options[4].length ? "4" : "disabled"}
                disabled={!options[4].length}
                control={<Radio color="primary" />}
                label="Opção 5"
              />
            </RadioGroup>
          </FormControl>
        ) : (
          <div>
            <p>Tem Gabarito?</p>
          </div>
        )}
      </form>
    </Paper>
  );
}
