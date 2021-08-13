import {createContext} from 'react';
import { CssBaseline } from '@material-ui/core';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';

const TemplateContext= createContext(null);

const TemplateProvider= ({children})=>{
    const theme= createMuiTheme({
        overrides: {
            MuiDialog: {
                paperwidthSm:{
                    maxwidth: 'unset'
                }
            }
        }
    })
    return(
        <>
            <TemplateContext.provider>
                <ThemeProvider theme={theme}>
                    <CssBaseline/>
                    {children}
                </ThemeProvider>
            </TemplateContext.provider>
        </>
    )
}

export default TemplateProvider;