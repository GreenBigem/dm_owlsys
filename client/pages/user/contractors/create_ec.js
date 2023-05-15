import { useState } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { createContractor } from "@/src/redux/features/contractor/contractorSlice";

export default function Index() {
  const [ec_short_legal_form, setEc_short_legal_form] = useState("");
  const [ec_short_name, setEc_short_name] = useState("");
  const [ec_inn, setEc_inn] = useState("");
  const dispatch = useDispatch();
  const router = useRouter();

  const submitHandle = () => {
    try {
      const data = new FormData();
      data.append("ec_short_legal_form", ec_short_legal_form);
      data.append("ec_short_name", ec_short_name);
      data.append("ec_inn", ec_inn);
      data.append("is_individual", false);

      dispatch(createContractor(data)).then((result) => {
        const idToPush = result.payload.newContractor._id;
        router.push(`/user/contractors/${idToPush}`);
      });
    } catch (error) {
      console.log(error);
    }
  };

  const clearFormHandler = () => {
    setSurname(""),
      setName(""),
      setPatronymic(""),
      router.push("/user/contractors/");
  };

  return (
    <>
      <div style={{ gridArea: "content" }}>
        <div className="flex justify-center p-5 m-2 bg-sky-500/100 rounded-lg w-auto content-center">
          <form
            className="grid justify-items-stretch"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid gap-8 mb-6 md:grid-cols-3">
              <div>
                <label
                  htmlFor="Орг.-правовая форма"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Орг.-правовая форма (кр. форма)
                </label>
                <input
                  type="text"
                  value={ec_short_legal_form}
                  onChange={(e) => setEc_short_legal_form(e.target.value)}
                  id="ec_short_legal_form"
                  className="grow bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="ООО, ЗАО, АО, ПАО и т.д."
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="ec_short_name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Краткое наименование (с "")
                </label>
                <input
                  type="text"
                  value={ec_short_name}
                  onChange={(e) => setEc_short_name(e.target.value)}
                  id="ec_short_name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Краткое наименование"
                />
              </div>
              <div>
                <label
                  htmlFor="ИНН"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  ИНН
                </label>
                <input
                  type="text"
                  value={ec_inn}
                  onChange={(e) => setEc_inn(e.target.value)}
                  id="ec_inn"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="ИНН"
                />
              </div>
            </div>
            <button
              type="submit"
              onClick={submitHandle}
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 justify-self-end"
            >
              Создать
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
