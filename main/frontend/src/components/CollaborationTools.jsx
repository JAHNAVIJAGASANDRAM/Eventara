import React, { useState } from "react";

export default function CollaborationTools() {
  const [activeTool, setActiveTool] = useState('chat');
  
  const collaborationFeatures = [
    {
      id: 'chat',
      title: 'Real-time Chat',
      icon: '💬',
      description: 'Instant messaging with file sharing, voice notes, and screen sharing',
      features: ['Spatial Audio', 'Voice Messages', 'File Sharing', 'Screen Share', 'Reactions']
    },
    {
      id: 'whiteboard',
      title: 'Virtual Whiteboards',
      icon: '🖼️',
      description: 'Collaborative drawing and brainstorming with infinite canvas',
      features: ['Infinite Canvas', 'Real-time Drawing', 'Sticky Notes', 'Templates', 'Export Options']
    },
    {
      id: 'code',
      title: 'Integrated Code Editor',
      icon: '💻',
      description: 'Multi-language code editor with real-time collaboration',
      features: ['Multi-language Support', 'Live Collaboration', 'Git Integration', 'Debugging', 'Code Review']
    },
    {
      id: 'video',
      title: 'Video Conferencing',
      icon: '📹',
      description: 'HD video calls with breakout rooms and recording',
      features: ['HD Video', 'Breakout Rooms', 'Recording', 'Background Blur', 'Raise Hand']
    },
    {
      id: 'file',
      title: 'File Management',
      icon: '📁',
      description: 'Secure file sharing with version control and permissions',
      features: ['Version Control', 'Access Permissions', 'Cloud Storage', 'Search', 'Preview']
    },
    {
      id: 'project',
      title: 'Project Management',
      icon: '📋',
      description: 'Task tracking, timelines, and progress monitoring',
      features: ['Task Boards', 'Timelines', 'Progress Tracking', 'Deadlines', 'Notifications']
    }
  ];

  const mockChatMessages = [
    { id: 1, user: 'Alice', message: 'Hey team! Ready to start the hackathon?', time: '2:30 PM', avatar: '👩‍💻' },
    { id: 2, user: 'Bob', message: 'Absolutely! I\'ve set up the repository', time: '2:31 PM', avatar: '👨‍💻' },
    { id: 3, user: 'Charlie', message: 'Great! I\'ll handle the frontend design', time: '2:32 PM', avatar: '👨‍🎨' },
    { id: 4, user: 'Diana', message: 'Perfect! I\'ll work on the backend API', time: '2:33 PM', avatar: '👩‍🔬' }
  ];

  const mockTasks = [
    { id: 1, title: 'Setup project repository', status: 'completed', assignee: 'Bob', priority: 'high' },
    { id: 2, title: 'Design user interface', status: 'in-progress', assignee: 'Charlie', priority: 'medium' },
    { id: 3, title: 'Implement authentication', status: 'pending', assignee: 'Diana', priority: 'high' },
    { id: 4, title: 'Write documentation', status: 'pending', assignee: 'Alice', priority: 'low' }
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Advanced <span className="gradient-text">Collaboration Tools</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Empower your teams with cutting-edge collaboration tools designed for seamless communication, real-time editing, and efficient project management
          </p>
        </div>

        {/* Tool Selection */}
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          {collaborationFeatures.map((tool) => (
            <button
              key={tool.id}
              onClick={() => setActiveTool(tool.id)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center gap-3 ${
                activeTool === tool.id
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white neon-blue'
                  : 'glass text-gray-300 hover:text-white hover:bg-white/10'
              }`}
            >
              <span className="text-xl">{tool.icon}</span>
              {tool.title}
            </button>
          ))}
        </div>

        {/* Active Tool Display */}
        <div className="glass-dark rounded-2xl p-8">
          {activeTool === 'chat' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Real-time Chat</h3>
                <div className="space-y-4 mb-6">
                  {mockChatMessages.map((msg) => (
                    <div key={msg.id} className="flex items-start gap-3 p-4 glass rounded-lg">
                      <div className="text-2xl">{msg.avatar}</div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-white font-semibold">{msg.user}</span>
                          <span className="text-gray-400 text-sm">{msg.time}</span>
                        </div>
                        <p className="text-gray-300">{msg.message}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex gap-2">
                  <input 
                    type="text" 
                    placeholder="Type your message..."
                    className="flex-1 px-4 py-3 bg-black/30 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none"
                  />
                  <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300">
                    Send
                  </button>
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Chat Features</h4>
                <div className="space-y-3">
                  {collaborationFeatures.find(t => t.id === 'chat').features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 glass rounded-lg">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTool === 'whiteboard' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Virtual Whiteboard</h3>
                <div className="glass rounded-xl p-8 h-96 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-4">🖼️</div>
                    <p className="text-gray-300">Interactive whiteboard canvas</p>
                    <p className="text-gray-400 text-sm mt-2">Draw, write, and collaborate in real-time</p>
                  </div>
                </div>
                <div className="flex gap-2 mt-4">
                  <button className="px-4 py-2 glass text-white rounded-lg hover:bg-white/20 transition-all duration-300">
                    🖊️ Pen
                  </button>
                  <button className="px-4 py-2 glass text-white rounded-lg hover:bg-white/20 transition-all duration-300">
                    📝 Text
                  </button>
                  <button className="px-4 py-2 glass text-white rounded-lg hover:bg-white/20 transition-all duration-300">
                    📌 Sticky Note
                  </button>
                  <button className="px-4 py-2 glass text-white rounded-lg hover:bg-white/20 transition-all duration-300">
                    🎨 Shapes
                  </button>
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Whiteboard Features</h4>
                <div className="space-y-3">
                  {collaborationFeatures.find(t => t.id === 'whiteboard').features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 glass rounded-lg">
                      <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTool === 'code' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Integrated Code Editor</h3>
                <div className="glass rounded-xl p-4 h-96">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-gray-400 text-sm ml-4">main.js</span>
                  </div>
                  <pre className="text-sm text-gray-300 font-mono">
{`import React from 'react';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  
  return (
    <div className="app">
      <h1>Hello World!</h1>
      <button onClick={() => setCount(count + 1)}>
        Count: {count}
      </button>
    </div>
  );
}

export default App;`}
                  </pre>
                </div>
                <div className="flex gap-2 mt-4">
                  <button className="px-4 py-2 glass text-white rounded-lg hover:bg-white/20 transition-all duration-300">
                    💾 Save
                  </button>
                  <button className="px-4 py-2 glass text-white rounded-lg hover:bg-white/20 transition-all duration-300">
                    🔄 Run
                  </button>
                  <button className="px-4 py-2 glass text-white rounded-lg hover:bg-white/20 transition-all duration-300">
                    📤 Share
                  </button>
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Code Editor Features</h4>
                <div className="space-y-3">
                  {collaborationFeatures.find(t => t.id === 'code').features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 glass rounded-lg">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTool === 'project' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Project Management</h3>
                <div className="space-y-3">
                  {mockTasks.map((task) => (
                    <div key={task.id} className="flex items-center gap-4 p-4 glass rounded-lg">
                      <div className={`w-3 h-3 rounded-full ${
                        task.status === 'completed' ? 'bg-green-400' : 
                        task.status === 'in-progress' ? 'bg-yellow-400' : 'bg-gray-400'
                      }`}></div>
                      <div className="flex-1">
                        <div className="text-white font-medium">{task.title}</div>
                        <div className="text-gray-400 text-sm">Assigned to {task.assignee}</div>
                      </div>
                      <div className={`px-2 py-1 rounded-full text-xs font-semibold ${
                        task.priority === 'high' ? 'bg-red-500/20 text-red-400' :
                        task.priority === 'medium' ? 'bg-yellow-500/20 text-yellow-400' :
                        'bg-green-500/20 text-green-400'
                      }`}>
                        {task.priority}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Project Features</h4>
                <div className="space-y-3">
                  {collaborationFeatures.find(t => t.id === 'project').features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 glass rounded-lg">
                      <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
