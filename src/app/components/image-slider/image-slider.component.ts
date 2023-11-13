import { Component, EventEmitter, Input, OnDestroy, Output } from '@angular/core';

@Component({
  selector: 'image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.css']
})
export class ImageSliderComponent implements OnDestroy {
  @Input() slides: string[] = [] as string[];

  currentIndex: number = 0;
  timeoutId?: number;
  @Output() onClick =  new EventEmitter();

  goToPrevious(): void {
    const isFirstSlide = this.currentIndex === 0;
    const newIndex = isFirstSlide
      ? this.slides.length - 1
      : this.currentIndex - 1;

    this.currentIndex = newIndex;
  }

  public goToNext(): void {
    const isLastSlide = this.currentIndex === this.slides.length - 1;
    const newIndex = isLastSlide ? 0 : this.currentIndex + 1;

    this.currentIndex = newIndex;
  }

  public goToSlide(slideIndex: number): void {
    this.currentIndex = slideIndex;
  }

  public getCurrentSlideUrl(): string {
    return `url('${this.slides[this.currentIndex]}')`;
  }

  public onClickModal(): void {
    this.onClick.emit(this.currentIndex);
  }

  public ngOnDestroy(): void {
    window.clearTimeout(this.timeoutId);
  }
}