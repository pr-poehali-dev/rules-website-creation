import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Book, Info, RuleIcon, Shield } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      <header className="bg-primary py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-primary-foreground flex items-center gap-2">
            <RuleIcon size={32} /> Правила проекта
          </h1>
          <p className="text-primary-foreground/80 mt-2 max-w-2xl">
            Здесь собраны все правила и важная информация для участников проекта
          </p>
        </div>
      </header>

      <main className="container mx-auto py-8 px-4">
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Info size={20} /> Основная информация
            </CardTitle>
            <CardDescription>
              Пожалуйста, ознакомьтесь с правилами проекта перед началом работы
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Правила разработаны для комфортной и продуктивной совместной работы 
              всех участников. Соблюдение этих правил обязательно для всех.
            </p>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Участники</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">125+</p>
              <p className="text-muted-foreground">активных участников проекта</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Правила</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">15</p>
              <p className="text-muted-foreground">основных разделов правил</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Последнее обновление</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">15.05.2023</p>
              <p className="text-muted-foreground">дата обновления правил</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <Card className="lg:col-span-1">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Book size={20} /> Содержание
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li>
                  <a href="#general-rules" className="text-primary hover:underline block py-1">
                    Общие правила
                  </a>
                </li>
                <li>
                  <a href="#communication" className="text-primary hover:underline block py-1">
                    Правила общения
                  </a>
                </li>
                <li>
                  <a href="#content" className="text-primary hover:underline block py-1">
                    Правила контента
                  </a>
                </li>
              </ul>
            </CardContent>
          </Card>
          
          <Card className="lg:col-span-3">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield size={20} /> Полные правила проекта
              </CardTitle>
              <CardDescription>
                Разверните каждый раздел, чтобы ознакомиться с подробными правилами
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[600px] pr-4">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1" id="general-rules">
                    <AccordionTrigger>Общие правила</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-4">
                        <p>
                          1. Каждый участник проекта обязан соблюдать правила проекта и следовать кодексу поведения.
                        </p>
                        <p>
                          2. Запрещается нарушать законодательство Российской Федерации.
                        </p>
                        <p>
                          3. Незнание правил не освобождает от ответственности.
                        </p>
                        <p>
                          4. Администрация имеет право изменять правила без предварительного уведомления.
                        </p>
                        <p>
                          5. В случае возникновения спорных ситуаций решение остается за администрацией проекта.
                        </p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-2" id="communication">
                    <AccordionTrigger>Правила общения</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-4">
                        <p>
                          1. Общение должно быть вежливым и уважительным. Запрещается оскорблять других участников.
                        </p>
                        <p>
                          2. Запрещены любые формы дискриминации, включая расовую, религиозную, половую и т.д.
                        </p>
                        <p>
                          3. Запрещен спам и размещение рекламы без согласования с администрацией.
                        </p>
                        <p>
                          4. Запрещены угрозы, шантаж и другие формы агрессивного поведения.
                        </p>
                        <p>
                          5. Запрещено использование нецензурной лексики и провокационных высказываний.
                        </p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-3" id="content">
                    <AccordionTrigger>Правила контента</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-4">
                        <p>
                          1. Запрещено размещение материалов, нарушающих авторские права.
                        </p>
                        <p>
                          2. Запрещен контент для взрослых, насилие, жестокость и другие шокирующие материалы.
                        </p>
                        <p>
                          3. Запрещено размещение вредоносных ссылок, вирусов и других вредоносных программ.
                        </p>
                        <p>
                          4. Весь контент должен соответствовать тематике проекта.
                        </p>
                        <p>
                          5. Администрация оставляет за собой право удалять любой контент без объяснения причин.
                        </p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </ScrollArea>
            </CardContent>
          </Card>
        </div>
      </main>

      <footer className="mt-12 py-6 bg-muted">
        <div className="container mx-auto px-4">
          <Separator className="mb-4" />
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground">© 2023 Правила проекта. Все права защищены.</p>
            <p className="text-muted-foreground mt-2 md:mt-0">
              По всем вопросам обращайтесь к администрации
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
