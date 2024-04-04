import React, { useEffect } from "react";
import { Model, Serializer } from "survey-core";
import { Survey } from "survey-react-ui";
import { useCallback } from "react";
import { Button } from "@/shared/ui/button";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/shared/ui/form";
import { Input } from "@/shared/ui/input";
import { Checkbox } from "@/shared/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shared/ui/select";

const download = (filename: string, data: string) => {
  var element = document.createElement("a");
  element.setAttribute(
    "href",
    "data:text/plain;charset=utf-8," + encodeURIComponent(data)
  );
  element.setAttribute("download", filename);

  element.style.display = "none";
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
};

const formSchema = z.object({
  questionName: z.string().trim().min(5, { message: "Слишком короткое ID" }),
  questionTitle: z.string().trim().min(3, { message: "Слишком короткое имя" }),
  questionDescription: z.optional(z.string().trim()),
  questionRequired: z.optional(z.boolean()),
  questionType: z.enum(["text", "checkbox"]),
  questionInputType: z.optional(z.enum(["text", "number", "tel"])),
});
const Home = () => {
  const [survey, setSurvey] = React.useState(new Model());
  const [page, setPage] = React.useState(survey.addNewPage());

  useEffect(() => {
    page.description = "Описание";
    page.title = "Название 1";
    survey.onComplete.add(alertResults);
  }, []);
  const Createform = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    const q = page.addNewQuestion(values.questionType);
    q.name = values.questionName;
    q.title = values.questionTitle;
    values.questionDescription === undefined
      ? null
      : (q.description = values.questionDescription);
    values.questionRequired === undefined
      ? null
      : (q.isRequired = values.questionRequired);
    values.questionInputType === undefined
      ? null
      : (q.inputType = values.questionInputType);
    download("Form.txt",JSON.stringify(survey.toJSON()));
  };

  const addQuestion = () => {
    const q = page.addNewQuestion("text", "question1");
    q.title = "Название вопроса";
    q.description = "Описание вопроса";
  };
  const alertResults = useCallback((sender: any) => {
    const results = JSON.stringify(sender.data);
    download("result.txt", results);
  }, []);

  return (
    <>
      <Form {...Createform}>
        <form
          onSubmit={Createform.handleSubmit(onSubmit)}
          className="space-y-8 w-[40%] mx-auto my-3"
          name="Createform"
          key="Createform"
        >
          <FormField
            control={Createform.control}
            name="questionName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>ID Вопроса</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormDescription>Введите уникальное ID вопроса</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={Createform.control}
            name="questionTitle"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Вопрос</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormDescription>Введите вопрос</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={Createform.control}
            name="questionDescription"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Описание</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormDescription>Введите описание</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={Createform.control}
            name="questionRequired"
            render={({ field }) => (
              <FormItem className="flex flex-row items-end space-x-3 ">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel>Это обязательный вопрос?</FormLabel>

                  <FormMessage />
                </div>
              </FormItem>
            )}
          />
          <FormField
            control={Createform.control}
            name="questionType"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Тип вопроса</FormLabel>
                <Select onValueChange={field.onChange}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Тип вопроса" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="text">Текст</SelectItem>
                    <SelectItem value="checkbox">Чекбокс</SelectItem>
                  </SelectContent>
                </Select>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={Createform.control}
            name="questionInputType"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Формат ввода</FormLabel>
                <Select onValueChange={field.onChange}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Какой формат использовать?" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="text">Текст</SelectItem>
                    <SelectItem value="number">Число</SelectItem>
                    {/* <SelectItem value="tel">Телефон</SelectItem> */}
                  </SelectContent>
                </Select>

                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Подтвердить</Button>
        </form>
      </Form>

      <Survey model={survey} />
    </>
  );
};

export default Home;
