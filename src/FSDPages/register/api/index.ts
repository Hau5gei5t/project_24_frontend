import axios from "axios";
import { RegisterModel } from "../model";
import { UserState } from "@/FSDApp/stores/user-store";
export { RegisterUser };

type userResponse = {
  data: {
    accessToken: string;
    user: UserState["userData"];
  };
  status: number;
};

async function RegisterUser(data: RegisterModel): Promise<userResponse> {
  return await axios
    .post(process.env.NEXT_PUBLIC_SERVER_URL + `/register`, {
      email: data.email,
      password: data.password,
      firstName: "",
      lastName: "",
      age: 0,
      gender: "male",
      education: "",
      occupation: "",
      role: "res",
    })
    .then((res) => {
      return { data: res.data, status: res.status };
    })
    .catch((err) => {
      return { data: err.response.data, status: err.response.status };
    });
}
