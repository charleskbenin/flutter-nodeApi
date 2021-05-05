import mongoose from 'mongoose';

interface myTodo{
    title: string;
    description: string;
}

interface TodoDocument extends mongoose.Document{
    title: string;
    description: string;
}

const todoSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: false
    }
});

interface modelInterface extends mongoose.Model<TodoDocument>{
    set(x: myTodo): TodoDocument;
}

todoSchema.statics.set=(x: myTodo)=>{
    return new Todo()
}

const Todo=mongoose.model<TodoDocument, modelInterface>(
    "todo",
    todoSchema
);

Todo.set({
    "title": "Hello World",
    "description": "Welcome to Ghana"
});

export {Todo}