import { Routes, Route, Navigate } from "react-router-dom";
import Home from "@/pages/Home";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* 确保/index路径正确重定向到主页 */}
      <Route path="/index" element={<Home />} />
      <Route path="/index.html" element={<Home />} />
      {/* 处理任何未匹配的路径，重定向到主页 */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
