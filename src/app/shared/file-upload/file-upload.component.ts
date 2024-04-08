import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss'],
})
export class FileUploadComponent {
  // Array of allowed file types
  @Input() allowedTypes: string[] = [];
  // Whether multiple files can be uploaded
  @Input() multiple: boolean = false;
  // Emit selected files
  @Output() filesSelected: EventEmitter<File[]> = new EventEmitter<File[]>();

  constructor() {}

  onDragOver(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
  }

  onDrop(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    const files = event.dataTransfer?.files;
    if (files) {
      this.handleFilesInDrop(files);
    }
  }
  handleFilesInDrop(files: FileList | null) {
    if (files && files.length > 0) {
      const uploadedFiles: File[] = [];

      for (let i = 0; i < files.length; i++) {
        const file = files[i];

        if (
          this.allowedTypes.length === 0 ||
          this.allowedTypes.includes(file.type)
        ) {
          uploadedFiles.push(file);
        } else {
          alert('Please upload only files of allowed types.');
        }
      }

      // Emit selected files
      this.filesSelected.emit(uploadedFiles);
    }
  }

  onFileChange(event: any) {
    const files = event.target.files;
    if (files && files.length > 0) {
      // Convert the FileList object to an array
      const fileList: File[] = Array.from(files);

      // Check if the file types are allowed
      const allowedFiles =
        this.allowedTypes.length > 0
          ? fileList.filter((file) => this.allowedTypes.includes(file.type))
          : fileList;

      // Emit selected files
      this.filesSelected.emit(allowedFiles);
    }
  }
}
