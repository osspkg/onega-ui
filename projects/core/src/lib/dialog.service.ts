import { DOCUMENT } from '@angular/common';
import {
  ApplicationRef,
  ComponentFactoryResolver,
  ComponentRef,
  Inject,
  Injectable, Injector,
  Renderer2,
  RendererFactory2,
} from '@angular/core';
import { ComponentType } from './types';

export class DialogInstance<T> {
  private readonly render: Renderer2;
  private readonly document: Document;
  private dialogRef?: HTMLDialogElement;
  private componentRef?: ComponentRef<T>;

  constructor(render: Renderer2, document: Document, dialogRef: HTMLDialogElement, componentRef: ComponentRef<T>) {
    this.render = render;
    this.document = document;
    this.dialogRef = dialogRef;
    this.componentRef = componentRef;

    dialogRef.addEventListener('close', ()=>{
      this.close();
    });
  }

  close(): void {
    this.componentRef?.destroy();
    this.componentRef = undefined;
    if (this.dialogRef) {
      this.render.removeChild(this.document.body, this.dialogRef);
      this.dialogRef = undefined;
    }
  }
}

@Injectable({
  providedIn: 'root',
})
export class DialogService {

  private readonly render: Renderer2;

  constructor(
    protected rendererFactory2: RendererFactory2,
    @Inject(DOCUMENT) private document: Document,
    private componentFactoryResolver: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private injector: Injector,
  ) {
    this.render = rendererFactory2.createRenderer(appRef, null);
  }

  open<T>(component: ComponentType<T>, context?:{ [key: string]: any }): DialogInstance<T> {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);
    const componentRef = componentFactory.create(this.injector);

    if (context) {
      Object.entries(context).forEach(([key, value]) => {
        if (typeof value === 'function') {
          (<any>componentRef.instance)[key].subscribe(value);
          return;
        }
        (<any>componentRef.instance)[key] = value;
      });
    }

    componentRef.changeDetectorRef.detectChanges();

    const dialogRef = this.render.createElement('dialog') as HTMLDialogElement;
    dialogRef.className = 'ong-dialog';
    this.render.appendChild(this.document.body, dialogRef);

    const dialogCloseRef = this.render.createElement('button') as HTMLButtonElement;
    dialogCloseRef.className = 'ong-dialog-close';
    dialogCloseRef.innerHTML = 'Close';
    dialogCloseRef.addEventListener('click', ()=>{
      dialogRef.close();
    }, true);
    this.render.appendChild(dialogRef, dialogCloseRef);

    this.render.appendChild(dialogRef, componentRef.location.nativeElement);
    dialogRef.showModal();

    return new DialogInstance(this.render, this.document, dialogRef, componentRef);
  }

}
