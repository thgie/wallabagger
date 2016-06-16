import { IWallabagSetup } from "./setup";

export /**
 *  WallabagApi
 */
class  WallabagApi {
    data: IWallabagSetup;
    constructor(parameters: IWallabagSetup) {
        this.data = parameters;
    }

    expired () {
        return (this.data.ExpireDateMs != null) && ( Date.now() > this.data.ExpireDateMs );
    }

    needNewAppToken() {
         return (
                  (this.data.ApiToken === "") ||
                  (this.data.ApiToken === null) ||
                  this.expired()
                   ) ;
    }


}