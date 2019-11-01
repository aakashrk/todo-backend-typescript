import * as express from "express";
import { TodoModel } from "./todo";
import { Controller, Route, Get, BodyProp, Post, Put, Delete } from "tsoa";
@Route("/todo")
export class TodoController extends Controller {
  @Get()
  public async getAll(): Promise<any[]> {
    const items: any = await TodoModel.find();
    return items;
  }

  @Get("/{id}")
  public async getItem(id: string): Promise<any> {
    const items: any = await TodoModel.findById(id);
    return items;
  }

  @Post()
  public async create(@BodyProp() name: string): Promise<any> {
    const item = new TodoModel({ name: name });
    await item.save();
    return item;
  }

  @Put("/{id}")
  public async update(id: string, @BodyProp() name: string): Promise<any> {
    const item = await TodoModel.findOneAndUpdate({ _id: id }, { name: name });
    return item;
  }

  @Delete("/{id}")
  public async delete(id: string): Promise<any> {
    const item = await TodoModel.findOneAndRemove({ _id: id });
    return item;
  }
}
