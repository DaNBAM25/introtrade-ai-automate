
import { useState } from "react";
import { toast } from "sonner";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { supabase } from "@/integrations/supabase/client";

interface ContactFormModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title?: string;
  description?: string;
  webhookUrl?: string;
}

export const ContactFormModal = ({
  open,
  onOpenChange,
  title = "Contact a specialist",
  description = "Fill in your details and our team will contact you shortly.",
}: ContactFormModalProps) => {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [comment, setComment] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !contact) {
      toast.error("Пожалуйста, заполните ваше имя и контактную информацию");
      return;
    }

    setIsLoading(true);

    try {
      const { error } = await supabase
        .from('Contacts_lov')
        .insert([
          {
            name,
            "Phone/email": contact,
            comments: comment,
          }
        ]);

      if (error) {
        throw error;
      }

      toast.success("Ваша заявка успешно отправлена!");
      setName("");
      setContact("");
      setComment("");
      onOpenChange(false);
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Не удалось отправить форму. Пожалуйста, попробуйте позже.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid w-full gap-2">
            <Label htmlFor="name">Полное имя</Label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Введите ваше полное имя"
              required
            />
          </div>
          <div className="grid w-full gap-2">
            <Label htmlFor="contact">Телефон или Email</Label>
            <Input
              id="contact"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              placeholder="Введите ваш телефон или email"
              required
            />
          </div>
          <div className="grid w-full gap-2">
            <Label htmlFor="comment">Комментарий (Необязательно)</Label>
            <Textarea
              id="comment"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Введите дополнительную информацию"
              className="resize-none"
            />
          </div>
          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? "Отправка..." : "Отправить"}
          </Button>
          <p className="text-xs text-muted-foreground text-center">
            Отправляя эту форму, вы соглашаетесь с нашей политикой конфиденциальности.
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
};
