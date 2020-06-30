---
title: vscode快捷键大全
tags: vscode
notebook: vscode use
---

# vscode 快捷键大全

官方文档

[widnows](https://go.microsoft.com/fwlink/?linkid=832145)
[liunx](https://go.microsoft.com/fwlink/?linkid=832144)
[mac](https://go.microsoft.com/fwlink/?linkid=832143)

挺简单的，文档描述清晰内容排版也不错，一看就懂，这里写的是我自己翻译的(太过简单的没必要翻译)，同时也为了方便自己查阅和使用

**[注意]** 插件的快捷键请在插件说明（文档）内查看，vscode不提供此类快捷键

Visual Studio Code (Keyboard Shortcuts for Windows)
按键|说明
---|---
**General**|普通
Ctrl+Shift+P,| F1 Show Command Palette
Ctrl+P |Quick Open, Go to File…
Ctrl+Shift+N |New window/instance
Ctrl+Shift+W |Close window/instance
Ctrl+, |User Settings
Ctrl+K Ctrl+S| Keyboard Shortcuts (显示所有快捷键,太多专业名词调到中文你就懂了)
**Basic editing**|基本编辑
Ctrl+X| Cut line (empty selection)
Ctrl+C |Copy line (empty selection)
Alt+ ↑ / ↓| Move line up/down
Shift+Alt + ↓ / ↑| Copy line up/down
Ctrl+Shift+K |Delete line
Ctrl+Enter |Insert line below(在当前输入行的下面插入一行)
Ctrl+Shift+Enter |Insert line above(在当前输入行的下面插入一行，试了一下没成功)
Ctrl+Shift+\ | Jump to matching bracket(跳转到匹配的标签)
Ctrl+] / [| Indent/outdent line(缩进取消缩进，注意中间那个][中间的斜杠不需要按)
Home / End| Go to beginning/end of line
Ctrl+Home |Go to beginning of file(跳转至文件开始处)
Ctrl+End |Go to end of file(跳转到文件结尾处)
Ctrl+↑ / ↓ |Scroll line up/down(滚动一行)
Alt+PgUp / PgDn| Scroll page up/down(整页滚动)
Ctrl+Shift+[| Fold (collapse) region(收起当前代码块)
Ctrl+Shift+]|Unfold (uncollapse) region(打开当前代码块)
Ctrl+K Ctrl+[ |Fold (collapse) all subregions(收起所有代码块)
Ctrl+K Ctrl+] |Unfold (uncollapse) all subregions(打开所有代码块)
Ctrl+K Ctrl+0| Fold (collapse) all regions(收起所有0级代码块，还有1~9级)
Ctrl+K Ctrl+J |Unfold (uncollapse) all regions(打开所有代码块)
Ctrl+K Ctrl+C| Add line comment(添加行注释)
Ctrl+K Ctrl+U| Remove line comment(删除行注释)
Ctrl+/| Toggle line comment(切分编辑窗口)
Shift+Alt+A| Toggle block comment（添加块级注释）
Alt+Z| Toggle word wrap(切换自动换行，效果同ctrl+z)
**Navigation**|导航
Ctrl+T| Show all Symbols(搜索文件，输入标记搜索文件标记，效果同ctrl+p)
Ctrl+G |Go to Line...
Ctrl+P| Go to File...
Ctrl+Shift+O |Go to Symbol...(ctrl+t的搜索框中输入@)
Ctrl+Shift+M |Show Problems panel(打开panel中的问题部分，按ctrl+j打开panel)
F8| Go to next error or warning
Shift+F8| Go to previous error or warning
Ctrl+Shift+Tab |Navigate editor group history(切换打开中的窗口)
Alt+ ← / → |Go back / forward (整词移动光标)
Ctrl+M |Toggle Tab moves focus(切换标签移动焦点，无效果)
**Search and replace**|查找和替换
Ctrl+F |Find
Ctrl+H |Replace
F3 / Shift+F3 |Find next/previous(在搜索结果中移动焦点)
Alt+Enter| Select all occurences of Find match(选中所有匹配)
Ctrl+D |Add selection to next Find match(选中下一个匹配)
Ctrl+K Ctrl+D| Move last selection to next Find match
Alt+C / R / W |Toggle case-sensitive / regex / whole word(搜索窗口切换大小写，正则，全匹配)
**Multi-cursor and selection**|键鼠多选
Alt+Click| Insert cursor(点选输入位置)
Ctrl+Alt+ ↑ / ↓ | Insert cursor above / below(脑子进水快捷键，windows下根本用不了)
Ctrl+U| Undo last cursor operation(反alt+click)
Shift+Alt+I | Insert cursor at end of each line selected
Ctrl+L Select |current line(整行选中)
Ctrl+Shift+L |Select all occurrences of current selection(选中当前选中的所有匹配)
Ctrl+F2 Select |all occurrences of current word(选中当前单词的所有匹配)
Shift+Alt+→| Expand selection(扩大选择，效果不如单词选择或者整行选择)
Shift+Alt+← |Shrink selection(缩小选择)
Shift+Alt +(drag mouse) |Column (box) selection(按住shift+alt然后鼠标左键点住拖动，点到那选到那)
Ctrl+Shift+Alt + (arrow key) |Column (box) selection(就近选择当前光标位置)
Ctrl+Shift+Alt+PgUp/PgDn|Column (box) selection page up/down(就近选择一页)
**Rich languages editing**|丰富语言编辑器
Ctrl+Space| Trigger suggestion(触发建议)
Ctrl+Shift+Space| Trigger parameter hints(触发参数提示)
Shift+Alt+F| Format document
Ctrl+K Ctrl+F |Format selection(格式化选定内容)
F12 |Go to Definition
Alt+F12 |Peek Definition(查看定义)
Ctrl+K F12| Open Definition to the side
Ctrl+.| Quick Fix
Shift+F12 |Show References(转到引用)
F2 |Rename Symbol(重命名符号)
Ctrl+K Ctrl+X| Trim trailing whitespace(裁剪尾随空格)
Ctrl+K M| Change file language(切换文件语言)
**Editor management**|编辑器管理
Ctrl+F4, Ctrl+W| Close editor
Ctrl+K F| Close folder(关闭窗口回到初始界面)
Ctrl+\| Split editor
Ctrl+ 1 / 2 / 3| Focus into 1st, 2nd or 3rd editor group
Ctrl+K Ctrl+ ←/→| Focus into previous/next editor group
Ctrl+Shift+PgUp / PgDn| Move editor left/right(向左/右移动编辑区)
Ctrl+K ← / →| Move active editor group(向左/右移动编辑器组)
**File management**|文件管理
Ctrl+N| New File
Ctrl+O |Open File...
Ctrl+S| Save
Ctrl+Shift+S |Save As...
Ctrl+K S |Save All
Ctrl+F4| Close
Ctrl+K Ctrl+W| Close All
Ctrl+Shift+T| Reopen closed editor
Ctrl+K| Enter Keep preview mode editor open
Ctrl+Tab| Open next
Ctrl+Shift+Tab| Open previous
Ctrl+K P| Copy path of active file
Ctrl+K R |Reveal active file in Explorer
Ctrl+K O |Show active file in new window/instance(当前文件在新窗口中打开)
**Display**|显示
F11 |Toggle full screen
Shift+Alt+0 |Toggle editor layout (horizontal/vertical)(垂直或水平布局)
Ctrl+ = / -| Zoom in/out (缩放)
Ctrl+B| Toggle Sidebar visibility
Ctrl+Shift+E |Show Explorer / Toggle focus
Ctrl+Shift+F| Show Search
Ctrl+Shift+G| Show Source Control
Ctrl+Shift+D| Show Debug
Ctrl+Shift+X| Show Extensions
Ctrl+Shift+H |Replace in files(侧边替换栏)
Ctrl+Shift+J| Toggle Search details
Ctrl+Shift+U| Show Output panel
Ctrl+Shift+V| Open Markdown preview
Ctrl+K V| Open Markdown preview to the side
Ctrl+K Z| Zen Mode (Esc Esc to exit)
**Debug**|调试
F9| Toggle breakpoint
F5| Start/Continue
Shift+F5 |Stop
F11 / Shift+F11 |Step into/out
F10| Step over
Ctrl+K Ctrl+I |Show hover
Integrated terminal|集成终端
Ctrl+`| Show integrated terminal
Ctrl+Shift+`| Create new terminal
Ctrl+C| Copy selection
Ctrl+V| Paste into active terminal
Ctrl+↑ / ↓ |Scroll up/down
Shift+PgUp / PgDn |Scroll page up/down
Ctrl+Home / End| Scroll to top/bottom
[Other operating systems’ keyboard shortcuts and additional unassigned shortcuts available at aka.ms/vscodekeybinding]
[一个前端开发者的笔记](https://github.com/moshuying/AlgorithmAndBlog)