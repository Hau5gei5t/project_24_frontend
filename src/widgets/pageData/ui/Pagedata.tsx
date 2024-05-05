import { createFormModel } from "@/FSDPages/createForm/model";
import { useFormData } from "@/FSDPages/createForm/ui/Createform";
import Elementdata from "@/widgets/elementData/ui";
import { Elementform } from "@/widgets/elementForm";
import Pageform from "@/widgets/pageForm/ui/Pageform";

interface IPageDataProps {
  page: createFormModel["pages"][0];
  isEditing: boolean;
  index: number;
}
export default function Pagedata(props: any) {
  const { formData, SetFormData } = useFormData();
  const { page, isEditing, index } = props;
  if (!page) return null;
  return (
    <div className="backdrop-blur-sm border border-cyan-200 p-5 flex flex-col gap-5 relative group/page">
      <button
        className={
          isEditing
            ? "absolute top-[-15px] right-[-15px] btn btn-error btn-sm  btn-circle group-hover/page:opacity-100 transition-opacity opacity-0"
            : "hidden opacity-0"
        }
        onClick={() => {
          const fd = formData;
          fd.pages = fd.pages.filter((p) => p.name !== page.name);
          SetFormData({ ...fd });
          localStorage.setItem("formData", JSON.stringify({ ...fd }));
        }}
      >
        <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          ></path>
        </svg>
      </button>
      <button
        className={
          isEditing
            ? "absolute top-[20px] right-[-15px] btn btn-sm btn-circle btn-info group-hover/page:opacity-100 transition-opacity opacity-0"
            : "disabled opacity-0"
        }
        onClick={() => {
          document.getElementById("pageModalEdit" + index)?.showModal();
        }}
      >
        <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.8536 1.14645C11.6583 0.951184 11.3417 0.951184 11.1465 1.14645L3.71455 8.57836C3.62459 8.66832 3.55263 8.77461 3.50251 8.89155L2.04044 12.303C1.9599 12.491 2.00189 12.709 2.14646 12.8536C2.29103 12.9981 2.50905 13.0401 2.69697 12.9596L6.10847 11.4975C6.2254 11.4474 6.3317 11.3754 6.42166 11.2855L13.8536 3.85355C14.0488 3.65829 14.0488 3.34171 13.8536 3.14645L11.8536 1.14645ZM4.42166 9.28547L11.5 2.20711L12.7929 3.5L5.71455 10.5784L4.21924 11.2192L3.78081 10.7808L4.42166 9.28547Z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          ></path>
        </svg>
      </button>
      <div className="border rounded-2xl p-5">
        <h2 className="text-xl mb-3 font-semibold">{page.title}</h2>
        <span className="placeholder">{page.description}</span>
      </div>
      {page.elements.map(
        (element: createFormModel["pages"][0]["elements"][0], i: number) => (
          <Elementdata
            key={element.name}
            element={element}
            isEditing={isEditing}
            index={i}
            pageIndex={index}
          />
        )
      )}
      <div className="flex flex-row-reverse">
        {isEditing && (
          <button
            className="btn btn-info"
            onClick={() =>
              document!
                .getElementById("elementModalCreate" + index)!
                .showModal()
            }
          >
            Добавить вопрос
          </button>
        )}
      </div>
      <dialog id={"elementModalCreate" + index} className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <Elementform index={index} />
        </div>
      </dialog>
      <dialog id={"pageModalEdit" + index} className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <Pageform index={index} page={page} />
        </div>
      </dialog>
    </div>
  );
}
