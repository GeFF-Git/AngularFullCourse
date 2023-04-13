import { InjectionToken } from "@angular/core";
import { AppConfig } from "./appconfig.interface";

export const App_Service_Config = new InjectionToken<AppConfig>('app.config');

export const APP_CONFIG : AppConfig = {
   apiEndPoint : ''
}
