import type { SlugVO } from "./value-objects/slug.js";
import { Entity } from "../../core/entities/entity.js";

interface QuestionProps {
  title: string
  content: string
  slug: SlugVO
  authorId: string
}
export class Question extends Entity<QuestionProps> {
}
