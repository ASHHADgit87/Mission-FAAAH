import * as vscode from "vscode";
import * as path from "path";
import * as sound from "sound-play";

export function activate(context: vscode.ExtensionContext) {
  const playSound = async (fileName: string) => {
    // Use joinPath with the extensionUri for better compatibility
    const soundUri = vscode.Uri.joinPath(context.extensionUri, "media", fileName);
    const soundPath = soundUri.fsPath; // Convert URI to a string path for the 'sound-play' library
    
    try {
        await sound.play(soundPath);
        console.log(`✅ Played ${fileName}`);
    } catch (err: any) {
        vscode.window.showErrorMessage("Sound error: " + (err.message || err));
    }
};

  context.subscriptions.push(
    vscode.commands.registerCommand("missionFaah.playSuccess", () => {
      playSound("mission-passed.mp3");
    }),
    vscode.commands.registerCommand("missionFaah.playFailure", () => {
      playSound("faaa.mp3");
    }),
  );

  if (vscode.window.onDidEndTerminalShellExecution) {
    context.subscriptions.push(
      vscode.window.onDidEndTerminalShellExecution(async (event) => {
        const exitCode = event.exitCode;
        console.log(`Command finished with exit code: ${exitCode}`);

        if (exitCode === 0) {
          await playSound("mission-passed.mp3");
        } else {
          await playSound("faaa.mp3");
        }
      }),
    );
    vscode.window.showInformationMessage(
      "Mission FAAAH active – listening to terminal commands.",
    );
  } else {
    vscode.window.showWarningMessage(
      "Shell integration not available. Enable it in settings or update VS Code.",
    );
  }
}

export function deactivate() {}
