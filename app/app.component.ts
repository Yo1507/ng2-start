import { Component } from '@angular/core';
import { Task } from './shared/models/Task'


@Component({
    selector: 'my-app',
    template: `
    <header>
        <nav class="navbar navbar-inverse">
            <div class="navbar-header"> 
                <a href="/" class="navbar-brand">My Angular2 App</a>
            </div>
        </nav>
    </header>

    <main>
    
    <div class="row">
        <div class="col-sm-4">
            <div *ngIf="tasks">
                <ul class="list-group tasks-list">
                    <li class="list-group-item" *ngFor="let task of tasks" (click)="selectTask(task)"
                    [class.active]="task === activeTask">
                        {{ task.name }} ({{ task.description }})
                    </li>
                </ul> 
            </div>
        </div>
    </div>
        <div class="col-sm-8">
            <div class="jumbotron" *ngIf="activeTask">
                <h2>{{ activeTask.name }} <small>{{ activeTask.description }}</small></h2>
            </div>
            <div class="jumbotron gocrazy" *ngIf="!activeTask">
                <span class="glyphicon glyphicon-hand-left"></span>
                <h2>Choose a task</h2>
            </div>
        </div>  
    
    </main>


    <footer class="text-center footer">Copyright &copy; Yo 2017</footer>
    `,
    styles: [`
        .tasks-list li {
            cursor: pointer;
        } 
        .jumbotron .glyphicon{
            font-size: 80px;
        }
        .gocrazy {
            background: red;
            color: #FFF;
        }
        .footer {
            position: relative;
	        margin-top: -150px; /* negative value of footer height */
	        height: 150px;
	        clear:both;
        } 
    `]
})
export class AppComponent{

    message = 'Hello!';

    tasks: Task[] = [
        {id:1,name:"Default task",description:"Task set up by default"},
        {id:2,name:"Do things",description:"You have to do things"},
        {id:1,name:"Come on",description:"Move your ass"}
    ];

    activeTask: Task;

    selectTask(task){
        this.activeTask = task;
        console.log(this.activeTask);
    }
}

