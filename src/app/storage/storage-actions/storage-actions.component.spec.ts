import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { EditFormFolderService } from './edit-form-folder';
import { EditFormSecretService } from './edit-form-secret';

import { StorageActionsComponent } from './storage-actions.component';

@Component({
    selector: 'app-edit-form-secret',
    template: '<div>Fake edit form secret component</div>'
})
class FakeEditFormSecretComponent {}

@Component({
    selector: 'app-edit-form-folder',
    template: '<div>Fake edit form folder component</div>'
})
class FakeEditFormFolderComponent {}

describe('StorageActionsComponent', () => {
    let component: StorageActionsComponent,
        fixture: ComponentFixture<StorageActionsComponent>,
        editFormSecretServiceMock,
        editFormFolderServiceMock;

    beforeEach(async(() => {
        editFormSecretServiceMock = {
            create: jasmine.createSpy(),
            close: jasmine.createSpy()
        };
        editFormFolderServiceMock = {
            create: jasmine.createSpy(),
            close: jasmine.createSpy()
        };

        TestBed.configureTestingModule({
            declarations: [
                StorageActionsComponent,
                FakeEditFormSecretComponent,
                FakeEditFormFolderComponent
            ],
            providers: [
                {
                    provide: EditFormSecretService,
                    useValue: editFormSecretServiceMock
                },
                {
                    provide: EditFormFolderService,
                    useValue: editFormFolderServiceMock
                }
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(StorageActionsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should be created', () => {
        expect(component).toBeTruthy();
    });

    it('should show add folder panel', () => {
        component.showAddFolder();
        expect(editFormFolderServiceMock.create).toHaveBeenCalled();
        expect(editFormSecretServiceMock.close).toHaveBeenCalled();
    });

    it('should show add secret panel', () => {
        component.showAddSecret();
        expect(editFormSecretServiceMock.create).toHaveBeenCalled();
        expect(editFormFolderServiceMock.close).toHaveBeenCalled();
    });
});
