import { formatDate } from "@/lib/utils";
import { EyeIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const StatupCard = ({ post }: { post: StartupTypeCard }) => {
  const {
    _creeatedAt,
    view,
    description,
    author: { _id: authorId, name },
    title,
    category,
    _id,
    image,
  } = post;
  return (
    <div>
      <li className="startup-card group">
        <div className="flex-between">
          <p className="startup_card_date">{formatDate(_creeatedAt)}</p>
          <div className="flex gap-1.5">
            <EyeIcon className="size-6 text-primary" />
            <span className="text-16-medium">{view}</span>
          </div>
        </div>

        <div className="flex-between mt-5 gap-5">
          <div className="flex-1">
            <Link href={`/user/${authorId}`}>
              <p className="text-16-medium line-clamp-1">{name}</p>
            </Link>
            <Link href={`/startup/${_id}`}>
              <h3 className="text-26-semibold line-clamp-1">{title}</h3>
            </Link>
          </div>

          <Link href={`/user/${authorId}`}>
            <Image
              src="https://placehold.co/400x400/png"
              alt="placeholder"
              height={48}
              width={48}
              className="rounded-full"
            />
          </Link>
        </div>

        <Link href={`/startup/${_id}`}>
          <p className="atartup-card-desc ">{description}</p>
          <img
            src={image || "https://placehold.co/600x400/png"}
            alt="placeholder"
            className="startup-card_img mt-3"
          />
        </Link>

        <div className="flex-between gap-3 mt-5">
          <Link href={`/query=${category.toLowerCase()}`}>
            <p className="text-16-medium">{category}</p>
          </Link>
          <button className="startup-card_btn" >
            <Link href={`/startup/${_id}`}>
              Details
            </Link>
          </button>
        </div>
      </li>
    </div>
  );
};

export default StatupCard;
