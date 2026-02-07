import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const items = [
  {
    value: "item-1",
    trigger: "J'ai un projet, comment ça se passe ?",
    content:
      "Avant tout, votre projet doit être suffisament défini pour que je puisse comprendre vos besoins et objectifs. Ensuite, nous discuterons de votre projet en détail, y compris les fonctionnalités souhaitées, les délais et le budget. Une fois que nous sommes sur la même longueur d'onde, je vous fournirai un devis détaillé et un calendrier de projet pour votre approbation.",
  },
  {
    value: "item-2",
    trigger: "Can I change my subscription plan?",
    content:
      "Yes, you can upgrade or downgrade your plan at any time from your account settings. Changes will be reflected in your next billing cycle.",
  },
  {
    value: "item-3",
    trigger: "What payment methods do you accept?",
    content:
      "We accept all major credit cards, PayPal, and bank transfers. All payments are processed securely through our payment partners.",
  },
];

export function FaqSection() {
  return (
    <div className="p-4 lg:px-12 xl:px-32 2xl:px-48">
      <h2 className="text-xl font-semibold font-exo2 mb-4">
        Questions fréquentes
      </h2>
      <Accordion
        type="single"
        collapsible
        defaultValue="item-1"
        className=""
      >
        {items.map((item) => (
          <AccordionItem
            key={item.value}
            value={item.value}
          >
            <AccordionTrigger className="text-base leading-7">
              {item.trigger}
            </AccordionTrigger>
            <AccordionContent className="text-base leading-7 text-muted-foreground">
              <p>{item.content}</p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
