<?php

namespace SilverStripe\Freeform\Extension;

use SilverStripe\Forms\FieldList;
use SilverStripe\Forms\HiddenField;
use SilverStripe\ORM\DataExtension;
use SilverStripe\View\Requirements;
use SilverStripe\Forms\LiteralField;
use SilverStripe\Freeform\Form\FreeformField;

class FreeformExtension extends DataExtension
{
    private static $db = [
        'FreeformJSON' => 'Text',
    ];

    public function updateCMSFields(FieldList $fields)
    {
        Requirements::javascript('silverstripe/freeform:client/dist/js/bundle.js');
        Requirements::css('silverstripe/freeform:client/dist/css/bundle.css');

        $fields->addFieldsToTab('Root.Freeform', [
            FreeformField::create('FreeformJSON', 'Freeform', $this->owner->FreeformJSON),
        ]);

        return $fields;
    }
}
