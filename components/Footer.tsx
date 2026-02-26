export default function Footer({ dict }: { dict?: any }) {
  return (
    <footer className="border-t border-border/40 bg-muted/20 py-12 mt-20">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold tracking-tighter">Yns.</span>
          <span className="text-muted-foreground text-sm border-l border-border/40 pl-2 ml-2">© {new Date().getFullYear()}</span>
        </div>
        
        <div className="flex items-center gap-6 text-sm font-medium text-muted-foreground">
          <a href="#" className="hover:text-foreground transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-foreground transition-colors">GitHub</a>
        </div>
      </div>
    </footer>
  );
}
