
import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const steps = [
    "בחירת רשת",
    "מילוי פרטי משתמש",
];

function App() {
    const [activeStep, setActiveStep] = React.useState(0);
    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    return (
        <div>

            <br />
            <Box >
                <Stepper activeStep={activeStep}style={{direction:"rtl"}} >
                    {steps.map((label) => (
                        <Step key={label}>
                            <StepLabel></StepLabel>
                        </Step>
                    ))}
                </Stepper>
                {activeStep === steps.length ? (
                    <React.Fragment >
                        <Typography sx={{ mt: 2, mb: 1 }} style={{direction:"rtl"}}>
                           כל השלבים הושלמו!</Typography>

                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "row",
                                pt: 2,
                            }}
                        >
                            <Box sx={{ flex: "1 1 auto" }} />
                            <Button onClick={handleReset}>
                                איפוס</Button>
                        </Box>
                    </React.Fragment>
                ) : (
                    <React.Fragment>
                        <Typography sx={{ mt: 2, mb: 1 }} style={{direction:"rtl"}}>
                            שלב {activeStep + 1}</Typography>

                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "row",
                                pt: 2,
                            }}
                        >
                            <Button onClick={handleNext} style={{direction:"LTR"}}>
                                {activeStep === steps.length - 1
                                    ? "סיים" : "הבא"}
                            </Button>
                            <Box sx={{ flex: "1 1 auto" }} />
                            <Button
                                color="inherit"
                                disabled={activeStep === 0}
                                onClick={handleBack}
                                sx={{ mr: 1 }}
                            >
                                חזור
                            </Button>
                            


                        </Box>
                    </React.Fragment>
                )}
            </Box>
        </div>
    );
}

export default App;
