
import React from "react";
import { FileText } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { 
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow 
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Documents = () => {
  const documents = [
    {
      id: 1,
      title: "Договор оказания услуг",
      description: "Стандартный договор на оказание услуг компанией ICG AI",
      url: "#", // Replace with actual document link
    },
    {
      id: 2,
      title: "Соглашение о конфиденциальности",
      description: "Политика по охране конфиденциальной информации",
      url: "#", // Replace with actual document link
    },
    {
      id: 3,
      title: "Согласие на обработку персональных данных",
      description: "Порядок обработки и использования персональных данных",
      url: "#", // Replace with actual document link
    },
    {
      id: 4,
      title: "Отказ от ответственности",
      description: "Ограничения ответственности при использовании сервисов",
      url: "#", // Replace with actual document link
    },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Учредительные документы</h1>
          
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Документы компании ICG AI</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Документ</TableHead>
                    <TableHead>Описание</TableHead>
                    <TableHead className="w-[150px]">Действие</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {documents.map((doc) => (
                    <TableRow key={doc.id}>
                      <TableCell className="font-medium">{doc.title}</TableCell>
                      <TableCell>{doc.description}</TableCell>
                      <TableCell>
                        <Link 
                          to={doc.url}
                          className="flex items-center gap-2 text-blue-600 hover:text-blue-800"
                        >
                          <FileText className="h-4 w-4" />
                          <span>Открыть</span>
                        </Link>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
          
          <div className="bg-slate-50 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Важная информация</h2>
            <p className="text-slate-700">
              Перед использованием наших услуг рекомендуется ознакомиться со всеми 
              представленными документами. Если у вас возникли вопросы по любому из 
              документов, пожалуйста, свяжитесь с нашей командой поддержки.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Documents;
