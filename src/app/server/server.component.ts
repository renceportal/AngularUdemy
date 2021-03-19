import { AfterViewInit, Component, ContentChild, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.scss']
})

export class ServerComponent implements OnInit, OnChanges, AfterViewInit {
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  // I add parenthesis to call the constructor of the EventEmitter & create a new EventEmitter object were now stored in 
  // serverCreated
  @Input('test_ngOnChanges') testNgOnChanges: string;
  @ViewChild('serverNameInputViewChild', { static: true }) serverNameViewChild: ElementRef;
  @ContentChild('serverNameInputContentChild', { static: true }) serverNameContentChild: ElementRef;

  serverId: number = 10;
  serverStatus: string = 'offline';

  value: number = 15;

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';

    setTimeout(() => {
      this.serverCreated.emit({ serverName: 'rence server', serverContent: 'rence content'});
    }, 5000);
    console.log('constructor called');
  }

  ngOnChanges(change: SimpleChanges) {
    console.log('ngOnChanges called');
  }

  ngOnInit() {
    console.log('ngOnInit called');
  }

  // If your going to use @ContentChild to get the data from your parent component
  // you have to put it in a ngAfterViewInit coz you have to load the ngOnInit first to load your 
  // parent component then in ngAfterViewInit you will see your data from your parent component
  ngAfterViewInit() {
    console.log(this.serverNameContentChild.nativeElement.textContent);
  }

  getServerStatus() {
    return this.serverStatus;
  }
  
  getColor() {
    return this.serverStatus === 'online' ? 'green' : 'magenta';
  }

  onAddServer(nameInput: HTMLInputElement) {
    // console.log(nameInput.value);
  }

  onAddServerViewChild() {
    // console.log(this.serverNameViewChild.nativeElement.value);
  }
}