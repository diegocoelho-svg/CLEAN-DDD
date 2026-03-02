import { randomUUID } from "node:crypto";
import type { SlugVO } from "./value-objects/slug.js";

interface QuestionProps {
  title: string
  content: string
  slug: SlugVO
  authorId: string
}
export class Question {
  public id: string;
  public title: string;
  public slug: SlugVO
  public content: string;
  public authorId: string;

  constructor(props: QuestionProps, id?: string) {
    this.title = props.title
    this.content = props.content
    this.slug = props.slug
    this.authorId = props.authorId
    this.id = id ?? randomUUID()
  }
}
