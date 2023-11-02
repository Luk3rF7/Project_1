import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { PersonData } from "./interface/person-data";

const postData = (data: PersonData) => {
  return axios.post("http://localhost:8080/send-data", data);
};

export function useIdentifyMutation() {
  const { mutate, isLoading, isSuccess, isError } = useMutation({
    mutationFn: (data: PersonData) => postData(data),
  });

  return {
    mutate,
    isLoading,
    isSuccess,
    isError,
  };
}
