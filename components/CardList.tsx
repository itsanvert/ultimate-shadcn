import Image from "next/image";
import { Card, CardContent, CardFooter, CardTitle } from "./ui/card";

export type Item = {
  id: number;
  title: string;
  badge: string;
  image: string;
  count: number;
};

type CardListProps = {
  title: string;
  items: Item[];
};

const CardList = ({ title, items }: CardListProps) => {
  return (
    <div>
      <h1 className="text-lg font-medium mb-6">{title}</h1>
      <div className="flex flex-col gap-2">
        {items.map((item) => (
          <Card
            key={item.id}
            className="flex-row items-center justify-between gap-4 p-2"
          >
            {/* Image */}
            <div className="w-12 h-12 rounded-sm relative overflow-hidden shrink-0">
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="48px"
                className="object-cover"
              />
            </div>

            {/* Content */}
            <CardContent className="flex-1 p-0">
              <CardTitle className="text-sm font-medium">
                {item.title}
              </CardTitle>
              <p className="text-xs text-gray-500">{item.badge}</p>
            </CardContent>

            {/* Footer */}
            <CardFooter className="p-0">
              <div className="text-sm font-medium">
                {(item.count / 1000).toFixed(1)}K
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CardList;
