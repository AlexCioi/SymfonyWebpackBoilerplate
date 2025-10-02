import FosJsRouting from "../../js/fosJsRouting";
import axios from "axios";

class TestService {
    testFunction() {
        let requestUrl = FosJsRouting.generate('public_app_homepage');

        return axios
            .get(requestUrl)
            .catch(err => console.error(err));
    }

}

export default new TestService();
