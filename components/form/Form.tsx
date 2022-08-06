import { AccountCircle, Visibility } from "@mui/icons-material";
import {
  TextField,
  Button,
  Box,
  Typography,
  Link,
  InputAdornment,
} from "@mui/material";
import { useFormControls } from "./";

const inputFieldValues = [
  {
    name: "firstName",
    label: "First Name",
    id: "my-name",
  },
  {
    name: "lastName",
    label: "Last Name",
    id: "my-name",
  },
  {
    name: "email",
    label: "Email address",
    id: "my-email",
  },
  {
    name: "password",
    label: "Password",
    id: "my-name",
    type: "password",
  },
];
export const Form = () => {
  const { handleInputValue, handleFormSubmit, formIsValid, errors } =
    useFormControls();

  return (
    <Box
      marginTop={3}
      width="540px"
      height="content"
      borderRadius="10px"
      sx={{ backgroundColor: "white" }}
    >
      <Box padding={5}>
        <form autoComplete="off" onSubmit={handleFormSubmit}>
          {inputFieldValues.map((inputFieldValue, index) => {
            return (
              <TextField
                sx={{ paddingTop: "10px", paddingBottom: "10px" }}
                className="forms"
                key={index}
                onChange={handleInputValue}
                onBlur={handleInputValue}
                name={inputFieldValue.name}
                label={inputFieldValue.label}
                error={errors[inputFieldValue.name]}
                autoComplete="none"
                fullWidth
                type={inputFieldValue?.type}
                {...(errors[inputFieldValue.name] && {
                  error: true,
                  helperText: errors[inputFieldValue.name],
                })}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      {errors[inputFieldValue.name] ? (
                        <svg
                          width="24"
                          height="24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g fill="none" fillRule="evenodd">
                            <circle fill="#FF7979" cx="12" cy="12" r="12" />
                            <rect
                              fill="#FFF"
                              x="11"
                              y="6"
                              width="2"
                              height="9"
                              rx="1"
                            />
                            <rect
                              fill="#FFF"
                              x="11"
                              y="17"
                              width="2"
                              height="2"
                              rx="1"
                            />
                          </g>
                        </svg>
                      ) : null}
                    </InputAdornment>
                  ),
                }}
              />
            );
          })}
        </form>
        <Button
          variant="contained"
          type="submit"
          disabled={false}
          style={{ width: "100%", backgroundColor: "hsl(154, 59%, 51%)" }}
          className="claim"
        >
          Claim your free trial
        </Button>
        <Typography
          className="footers"
          display="flex"
          justifyContent="center"
          color="hsl(246, 25%, 77%)"
        >
          By clicking the button, you are agreeing to our
          <Link href="#" sx={{ color: "red", textDecoration: "none" }}>
            Terms and Services
          </Link>
        </Typography>
      </Box>
    </Box>
  );
};
