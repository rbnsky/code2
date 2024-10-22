// Canvas setup and animation
class CanvasAnimation {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private leftLineHeight: number;
  private rightLineHeight: number;
  private mountainHeight: number;
  private readonly squareSize: number = 30; // square size
  private readonly lineThickness: number = 5; // Line thickness
  private readonly lineLength: number = 200; // Line length

  constructor() {
      // Create and setup canvas
      this.canvas = document.createElement('canvas');
      this.ctx = this.canvas.getContext('2d')!;
      document.body.appendChild(this.canvas);

      //  random heights
      this.leftLineHeight = 0;
      this.rightLineHeight = 0;
      this.mountainHeight = 0;

      // Setup event listeners
      window.addEventListener('resize', () => this.resize());
      this.resize();
      this.generateRandomHeights();
      this.draw();
  }

  
  // Resize canvas 
 
  private resize(): void {
      const dpr = window.devicePixelRatio || 1;
      this.canvas.width = window.innerWidth * dpr;
      this.canvas.height = window.innerHeight * dpr;
      this.canvas.style.width = `${window.innerWidth}px`;
      this.canvas.style.height = `${window.innerHeight}px`;
      this.ctx.scale(dpr, dpr);
      this.draw();
  }

  
  // Generates random heights for lines and mountain within specified ranges
  private generateRandomHeights(): void {
      const minLineHeight = window.innerHeight * 0.1;
      const maxLineHeight = window.innerHeight * 0.4;
      const minMountainHeight = window.innerHeight * 0.8;
      const maxMountainHeight = window.innerHeight * 0.9;

      this.leftLineHeight = Math.random() * (maxLineHeight - minLineHeight) + minLineHeight;
      this.rightLineHeight = Math.random() * (maxLineHeight - minLineHeight) + minLineHeight;
      this.mountainHeight = Math.random() * (maxMountainHeight - minMountainHeight) + minMountainHeight;
  }

  
  //Draw square 
  
  private drawSquare(x: number, y: number): void {
      const halfSize = this.squareSize / 2;
      this.ctx.strokeStyle = 'white';
      this.ctx.lineWidth = this.lineThickness;
      this.ctx.fillStyle = 'black';
      
      // black square
      this.ctx.fillRect(x - halfSize, y - halfSize - this.squareSize, this.squareSize, this.squareSize);
      // white stroke
      this.ctx.strokeRect(x - halfSize, y - halfSize - this.squareSize, this.squareSize, this.squareSize);
  }

  
  // Draws the mountain using a quadratic curve
  private drawMountain(): void {
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      // Calculate mountain base points within center 1/3 of screen
      const centerThirdStart = width / 3;
      const centerThirdEnd = (width * 2) / 3;
      const mountainBaseWidth = centerThirdEnd - centerThirdStart;
      const mountainLeft = centerThirdStart + (mountainBaseWidth * 0.1); // 10% from start of center third
      const mountainRight = centerThirdEnd - (mountainBaseWidth * 0.1); // 10% from end of center third
      
      this.ctx.beginPath();
      this.ctx.moveTo(mountainLeft, height);
      this.ctx.quadraticCurveTo(
          width / 2, 
          height - this.mountainHeight,
          mountainRight,
          height
      );
      
      // fill black
      this.ctx.fillStyle = 'black';
      this.ctx.fill();
      
      // white stroke
      this.ctx.strokeStyle = 'white';
      this.ctx.lineWidth = this.lineThickness;
      this.ctx.stroke();
  }

  
  // Main drawing function
  private draw(): void {
    const width = window.innerWidth;
    const height = window.innerHeight;

    // Clear canvas and set background
    this.ctx.fillStyle = 'black';
    this.ctx.fillRect(0, 0, width, height);

    // Draw lines (platforms)
    this.ctx.strokeStyle = 'white';
    this.ctx.lineWidth = this.lineThickness;

    // Left line
    this.ctx.beginPath();
    const leftLineX = width * 0.15;
    this.ctx.moveTo(leftLineX - this.lineLength/2, height - this.leftLineHeight);
    this.ctx.lineTo(leftLineX + this.lineLength/2, height - this.leftLineHeight);
    this.ctx.stroke();

    // Right line
    this.ctx.beginPath();
    const rightLineX = width * 0.85;
    this.ctx.moveTo(rightLineX - this.lineLength/2, height - this.rightLineHeight);
    this.ctx.lineTo(rightLineX + this.lineLength/2, height - this.rightLineHeight);
    this.ctx.stroke();

    // Draw mountain 
    this.drawMountain();

    // Draw squares (cannons)
    this.drawSquare(leftLineX, height - this.leftLineHeight);
    this.drawSquare(rightLineX, height - this.rightLineHeight);
}
}

// Initialize when page loads
window.addEventListener('load', () => {
  new CanvasAnimation();
});

// Add necessary CSS
const style = document.createElement('style');
style.textContent = `
  body {
      margin: 0;
      overflow: hidden;
      background: black;
  }
  canvas {
      display: block;
  }
`;
document.head.appendChild(style);