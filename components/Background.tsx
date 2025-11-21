import React, { useEffect, useRef } from 'react';

interface BackgroundProps {
  isDarkMode: boolean;
}

const Background: React.FC<BackgroundProps> = ({ isDarkMode }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let particlesArray: Particle[] = [];
    let shootingStarsArray: ShootingStar[] = [];
    let animationFrameId: number;

    const mouse = {
      x: -1000,
      y: -1000,
      radius: 150
    };

    const handleMouseMove = (event: MouseEvent) => {
      mouse.x = event.clientX;
      mouse.y = event.clientY;
    };

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      init();
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // --- Particle Class ---
    class Particle {
      x: number;
      y: number;
      directionX: number;
      directionY: number;
      size: number;
      color: string;

      constructor() {
        this.x = Math.random() * canvas!.width;
        this.y = Math.random() * canvas!.height;
        this.directionX = (Math.random() * 0.2) - 0.1; 
        this.directionY = (Math.random() * 0.2) - 0.1;
        this.size = (Math.random() * 1.5) + 0.5;
        this.color = isDarkMode ? 'rgba(203, 213, 225, 0.5)' : 'rgba(148, 163, 184, 0.5)';
      }

      update() {
        // Boundary check
        if (this.x > canvas!.width || this.x < 0) this.directionX = -this.directionX;
        if (this.y > canvas!.height || this.y < 0) this.directionY = -this.directionY;

        // Mouse Interaction
        let dx = mouse.x - this.x;
        let dy = mouse.y - this.y;
        let distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < mouse.radius + this.size) {
          if (mouse.x < this.x && this.x < canvas!.width - this.size * 10) this.x += 1;
          if (mouse.x > this.x && this.x > this.size * 10) this.x -= 1;
          if (mouse.y < this.y && this.y < canvas!.height - this.size * 10) this.y += 1;
          if (mouse.y > this.y && this.y > this.size * 10) this.y -= 1;
        }

        this.x += this.directionX;
        this.y += this.directionY;
        this.draw();
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        ctx.fill();
      }
    }

    // --- Shooting Star Class ---
    class ShootingStar {
      x: number;
      y: number;
      len: number;
      speed: number;
      opacity: number;
      active: boolean;
      timer: number;

      constructor() {
        this.x = 0;
        this.y = 0;
        this.len = 0;
        this.speed = 0;
        this.opacity = 0;
        this.active = false;
        // Random start time between 0 and 500 frames
        this.timer = Math.random() * 500; 
      }

      reset() {
        this.x = Math.random() * canvas!.width;
        this.y = Math.random() * (canvas!.height * 0.5); // Start from top 50%
        this.len = Math.random() * 80 + 40;
        this.speed = Math.random() * 10 + 6;
        this.opacity = 1;
        this.active = true;
      }

      update() {
        // Only active in dark mode for the full effect
        if (!isDarkMode) return;

        if (this.active) {
          this.x -= this.speed; // Move Left
          this.y += this.speed * 0.5; // Move Down
          this.opacity -= 0.015;

          if (this.opacity <= 0 || this.x < 0 || this.y > canvas!.height) {
            this.active = false;
            this.timer = Math.random() * 600 + 200; // Reset timer
          }
        } else {
          this.timer--;
          if (this.timer <= 0) {
            this.reset();
          }
        }
        this.draw();
      }

      draw() {
        if (!this.active || !ctx) return;
        
        // Gradient tail for shooting star
        const gradient = ctx.createLinearGradient(this.x, this.y, this.x + this.len, this.y - (this.len * 0.5));
        gradient.addColorStop(0, 'rgba(255, 255, 255, 0)');
        gradient.addColorStop(1, `rgba(129, 140, 248, ${this.opacity})`); // Indigo-400ish

        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.x + this.len, this.y - (this.len * 0.5));
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 1.5;
        ctx.lineCap = 'round';
        ctx.stroke();
      }
    }

    function init() {
      particlesArray = [];
      shootingStarsArray = [];
      const numberOfParticles = (canvas!.width * canvas!.height) / 25000;
      for (let i = 0; i < numberOfParticles; i++) {
        particlesArray.push(new Particle());
      }
      // Add occasional shooting stars
      for (let i = 0; i < 3; i++) {
        shootingStarsArray.push(new ShootingStar());
      }
    }

    function animate() {
      if (!ctx || !canvas) return;
      animationFrameId = requestAnimationFrame(animate);
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
      }
      
      for (let i = 0; i < shootingStarsArray.length; i++) {
        shootingStarsArray[i].update();
      }
      
      connect();
    }

    function connect() {
       if (!ctx) return;
       let opacityValue = 1;
       const connectionDistance = 120;

       for (let a = 0; a < particlesArray.length; a++) {
         for (let b = a; b < particlesArray.length; b++) {
            let distance = ((particlesArray[a].x - particlesArray[b].x) * (particlesArray[a].x - particlesArray[b].x))
            + ((particlesArray[a].y - particlesArray[b].y) * (particlesArray[a].y - particlesArray[b].y));
            
            if (distance < (connectionDistance * connectionDistance)) {
                opacityValue = 1 - (distance / (connectionDistance * connectionDistance));
                ctx.strokeStyle = isDarkMode 
                   ? `rgba(148, 163, 184, ${opacityValue * 0.2})` 
                   : `rgba(100, 116, 139, ${opacityValue * 0.2})`;
                ctx.lineWidth = 0.5;
                ctx.beginPath();
                ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
                ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
                ctx.stroke();
            }
         }
       }
    }

    init();
    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isDarkMode]);

  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden -z-10 bg-slate-50 dark:bg-slate-950 transition-colors duration-500">
      {/* Large Animated Blobs - Subtle gradients */}
      <div className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] bg-indigo-300/20 dark:bg-indigo-900/10 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[100px] opacity-40 animate-blob"></div>
      <div className="absolute top-[20%] right-[-10%] w-[50vw] h-[50vw] bg-violet-300/20 dark:bg-violet-900/10 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[100px] opacity-40 animate-blob animation-delay-4000"></div>
      <div className="absolute bottom-[-20%] left-[20%] w-[50vw] h-[50vw] bg-blue-300/20 dark:bg-blue-900/10 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[100px] opacity-40 animate-blob animation-delay-2000"></div>
      
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
      
      {/* Noise Texture */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none"></div>
    </div>
  );
};

export default Background;